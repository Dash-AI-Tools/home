# Proposal

## Why

Dash AI has no place to publish writing about its tools or the work around AI-assisted development. The site is a static Astro build served by nginx, so a blog has to fit that shape. Ghost gives non-developers an editor and publishing flow without adding a database or auth to the site itself. The site also has no deployment recipe beyond a bare `Dockerfile`, and it is going onto a VPS managed by Dokploy.

## What Changes

- Add a blog at `/blog/` whose posts are written in a self-hosted Ghost instance and fetched from the Ghost Content API when the site is built. The site stays fully static.
- Add `/blog/<slug>/` post pages and a `/blog/` index, styled with the existing editorial design system, plus a "Blog" link in the header and footer navigation.
- Add a Ghost stack (Ghost and MySQL) to the repo as a Docker Compose file that Dokploy can deploy on its own domain.
- Make the site image build accept the Ghost URL and Content API key as build arguments, and document how a published post triggers a Dokploy redeploy of the site.
- Add `.env.example` and a deployment guide covering both Dokploy services (Ghost, then the site), domains, volumes and backups.

## Capabilities

### New Capabilities
- `blog`: what visitors see at `/blog/` and `/blog/<slug>/`, how Ghost content maps to pages, and how the site behaves when Ghost is not configured or not reachable at build time.
- `dokploy-deployment`: how the repo is deployed to Dokploy as two services (Ghost stack, static site), the configuration each needs, and how publishing in Ghost refreshes the site.

### Modified Capabilities
<!-- None: the repo has no existing specs. -->

## Impact

- Code: new `src/pages/blog/` routes, a small Ghost client in `src/lib/`, a post card/list style block in `src/styles/global.css`, nav links in `src/layouts/Base.astro`.
- Build: `Dockerfile` gains `ARG`s; the build now needs network access to the Ghost host. `.dockerignore` excludes deployment files.
- New files: `deploy/ghost/docker-compose.yml`, `.env.example`, `docs/deployment.md` (or a `DEPLOY.md` at the root).
- Dependencies: none added. The Content API is called with native `fetch`.
- Systems: a new Ghost + MySQL stack on the VPS, a new public domain for it, and a Ghost webhook into Dokploy.
