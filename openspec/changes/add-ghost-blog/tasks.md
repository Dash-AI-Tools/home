# Tasks

## 1. Ghost data layer

- [x] 1.1 Add `src/lib/ghost.ts` with `getPosts()` and `getPost(slug)` over native `fetch`, reading `GHOST_URL` and `GHOST_CONTENT_API_KEY` from `import.meta.env`; unset config warns and returns no posts, a failed request throws naming the URL and status. Verify: `npm run build` with no env vars succeeds and logs the warning; with a bad URL it exits non-zero with the named cause.
- [x] 1.2 Add `site` to `astro.config.mjs` from `SITE_URL` and add `.env.example` listing `GHOST_URL`, `GHOST_CONTENT_API_KEY`, `SITE_URL`. Verify: `.env` stays git-ignored and the build reads the values.

## 2. Blog pages

- [x] 2.1 Add `src/pages/blog/index.astro` listing posts newest first (title, date, excerpt, primary tag) with an empty state. Verify: build against a Ghost with posts and one with none; both render, and drafts and pages are absent.
- [x] 2.2 Add `src/pages/blog/[slug].astro` with `getStaticPaths`, title, date, reading time, tags, feature image, body via `set:html`, back link, meta description and canonical URL. Verify: a published post renders at `/blog/<slug>/`, and an unpublished slug returns 404 from `astro preview`.
- [x] 2.3 Add Blog to the header and footer nav in `src/layouts/Base.astro` with `current: 'blog'` and `aria-current`. Verify: link present on every page and marked current on `/blog/` routes.
- [x] 2.4 Style the index and a `.prose` post body in `src/styles/global.css` per `DESIGN.md`, covering headings, code, tables, images and Ghost `kg-*` cards, in light and dark. Verify: check `/blog/` and a rich post at 375px and 1280px in both themes with no horizontal page scroll, and run an axe pass on both routes.

## 3. Ghost stack

- [x] 3.1 Add `deploy/ghost/docker-compose.yml` with `ghost:5-alpine` and `mysql:8`, named volumes, health checks, `depends_on` with `service_healthy`, and required secrets as `${VAR:?}`. Verify: `docker compose config` fails with no `.env` and passes with the variables set; locally `docker compose up` shows both services healthy and `/ghost/` loads.
- [x] 3.2 Add `deploy/ghost/.env.example` with the Ghost URL and database passwords, no real values. Verify: no secrets in `git diff`.

## 4. Site image

- [x] 4.1 Update the `Dockerfile` build stage with `ARG GHOST_URL`, `ARG GHOST_CONTENT_API_KEY`, `ARG SITE_URL` exported as `ENV` for the build only, and update `.dockerignore` for deploy files. Verify: `docker build` with and without the args both succeed, and `docker history`/`docker run ... env` on the final image shows no Ghost key.
- [x] 4.2 Run the built image locally and open `/blog/`. Verify: `docker run -p 8080:80` serves the blog and the existing pages and cache headers are unchanged.

## 5. Deployment guide

- [x] 5.1 Write `docs/deployment.md`: create the Ghost Compose service in Dokploy with its domain and TLS, first-run Ghost setup, creating the Content API integration, creating the site Application with build args and domain, backups for both named volumes. Verify: a second reader can follow it on a clean Dokploy without questions, checked by a dry read against the compose file and Dockerfile names.
- [ ] 5.2 Document the Ghost webhooks (`post.published`, `post.published.edited`, `post.unpublished`, `post.deleted`) pointing at the Dokploy deploy webhook, how to confirm a deployment started, and the manual redeploy fallback. Verify: publishing a test post on the deployed stack starts a Dokploy deployment and the post appears on `/blog/`.

## 6. Wrap-up

- [x] 6.1 Run `openspec validate add-ghost-blog` and `npm run build`. Verify: both pass, and the home, DocMyRepos and openspec-hud pages are unchanged.
