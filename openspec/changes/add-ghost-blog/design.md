# Design

## Context

The site is a static Astro 7 build (`astro build`), copied into an `nginx:1.27-alpine` image by a two-stage `Dockerfile`. There is no server runtime, no `@astrojs/*` integration and no `.env` handling today. Pages share `src/layouts/Base.astro`, whose nav is hard-coded, and styles live in `src/styles/global.css` following `DESIGN.md`. See proposal.md for motivation.

Ghost exposes a read-only Content API (`/ghost/api/content/`) authenticated by a key that is safe to ship to browsers, and an Admin API that is not. Ghost needs MySQL 8 in production.

## Goals / Non-Goals

**Goals:**
- Keep the site static: no runtime process in the site image beyond nginx.
- One place (`src/lib/ghost.ts`) owns Ghost access, so pages never build URLs or parse responses.
- Two independently deployable Dokploy services that fail independently.

**Non-Goals:**
- Comments, membership, newsletters or search on the blog.
- Pagination, tag or author archive pages, and RSS (can follow; the data layer fetches all posts so they are cheap to add).
- Running Ghost as the public site or theming Ghost itself. The Ghost domain is only for editing and serving images.
- Zero-downtime content updates without a rebuild.

## Decisions

**1. Build-time fetch, static output.** Pages call the Content API during `astro build` and emit HTML. This keeps the nginx image, the cache headers and the hosting model unchanged, and the blog stays up if Ghost is down. *Alternative:* Astro SSR with the Node adapter would show posts instantly but adds a Node runtime, an adapter dependency and a new Dockerfile/health story; the posting cadence does not justify it.

**2. Native `fetch`, no Ghost SDK.** `@tryghost/content-api` pulls in axios for three calls. `src/lib/ghost.ts` exposes `getPosts()` and `getPost(slug)` over `fetch` with `include=tags,authors`, `formats=html`, `limit=all`. *Alternative:* the official client; rejected to avoid a dependency for a trivial read.

**3. Config via `import.meta.env` and Docker build args.** `GHOST_URL` and `GHOST_CONTENT_API_KEY` are read at build. The `Dockerfile` declares them as `ARG` and exports them as `ENV` in the build stage only; the runtime stage is the nginx stage, so nothing persists in the final image. The Content API key is public by design, but it is still kept out of git. Dokploy passes build arguments from the service's environment settings.

**4. Failure policy in the data layer.** Unset URL or key: warn once and return no posts (the index shows the empty state, `getStaticPaths` yields nothing). Set but failing: throw with the URL and status, so a bad deploy fails in Dokploy instead of publishing an empty blog. This is what the "Behavior without Ghost" requirement encodes.

**5. Post body is Ghost HTML rendered with `set:html`.** Content comes from authenticated Ghost editors, not visitors, and is the one trusted-HTML boundary. Styling is scoped under a `.prose` class in `global.css` (images, code, tables, Ghost's `kg-*` card classes for galleries, bookmarks and embeds) and nothing in the post can load site scripts. *Alternative:* sanitizing with a library; deferred, since editors are admins. This is called out under Risks.

**6. Routes.** `src/pages/blog/index.astro` and `src/pages/blog/[slug].astro` using `getStaticPaths`. `Base.astro`'s `current` prop gains `'blog'`, and the nav and footer gain a Blog link. Post pages set a canonical URL from `Astro.site`; `astro.config.mjs` gains `site` read from a `SITE_URL` env var with a default of the production domain placeholder in docs.

**7. Ghost stack in `deploy/ghost/docker-compose.yml`.** Ghost 5 (`ghost:5-alpine`) and `mysql:8`, named volumes for `/var/lib/ghost/content` and MySQL data, `healthcheck`s on both, Ghost waiting on MySQL being healthy, and `${VAR:?}` syntax for required secrets so an unset password fails the deploy. No `ports:` and no Traefik labels: Dokploy attaches the domain and TLS to the Ghost service in its UI. *Alternative:* one compose file for everything; rejected because the site and Ghost have different lifecycles and the site must be rebuildable while Ghost is untouched.

**8. Two Dokploy services.** Ghost as a Compose service, the site as an Application built from the repo's `Dockerfile`. Order matters: Ghost must exist before the site build, because the build calls it. The site's build args point at Ghost's public URL, not an internal hostname, so builds do not depend on Docker network membership.

**9. Rebuild trigger.** Ghost custom integration webhooks (`post.published`, `post.published.edited`, `post.unpublished`, `post.deleted`) call the Dokploy application's deploy webhook URL. The guide documents this and a manual redeploy. Ghost sends no secret to Dokploy, so the Dokploy URL's token is the control; the guide says to treat it as a secret.

## Risks / Trade-offs

- [Ghost down during a build fails the deploy] → intentional (Decision 4); the previous site container keeps serving, since Dokploy only swaps on success.
- [Content changes need a redeploy, so edits take about a build-time to appear] → webhook automates it; the build is short because the site has no heavy assets.
- [Rapid edits trigger many builds] → Dokploy queues deployments; document that editors can pause the webhook while drafting in bulk. Accepted.
- [Trusted-HTML rendering means a compromised Ghost admin could inject script into the site] → Ghost admin sits behind its own login, the key in the build is read-only, and the guide recommends enabling Ghost 2FA. Add a CSP in nginx as a later hardening step.
- [Ghost image URLs point at the Ghost domain] → images are served by Ghost; if Ghost is down, post images break while text stays. Accepted for now; the guide notes the option of a CDN in front of Ghost.
- [Build args are visible in image history and Dokploy logs] → only the public Content API key and public URL are passed; the Admin key is never used.

## Migration Plan

1. Deploy the Ghost stack in Dokploy, attach the Ghost domain, finish Ghost setup, create the Content API integration.
2. Add `GHOST_URL`, `GHOST_CONTENT_API_KEY` and `SITE_URL` to the site application's build settings and deploy it.
3. Add the Ghost webhooks pointing at the site application's deploy webhook.

Rollback: redeploy the previous site commit in Dokploy, or remove the build args to ship the empty-state blog. Ghost data is untouched by either, and the volumes are backed up per the guide.

## Open Questions

- Production domains for the site and for Ghost (the guide uses placeholders such as `blog-admin.example.com`). Does not change specs or tasks.
