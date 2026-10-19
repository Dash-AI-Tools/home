# Deploying the site and its Ghost blog on Dokploy

Two independent Dokploy services:

| Service | Type | Source | Public domain |
|---|---|---|---|
| Ghost (Ghost + MySQL) | Compose | `deploy/ghost/docker-compose.yml` | e.g. `blog-admin.example.com` |
| Site (Astro, served by nginx) | Application | the repo `Dockerfile` | e.g. `example.com` |

The site is static. It fetches posts from Ghost **when it is built**, so deploy Ghost first and rebuild the site whenever content changes (step 5 automates that).

## 1. Deploy Ghost

1. In Dokploy, create a **Compose** service from this Git repository. Set the compose path to `deploy/ghost/docker-compose.yml`.
2. On its **Environment** tab, set the variables from `deploy/ghost/.env.example`:
   - `GHOST_PUBLIC_URL`: the public `https` URL you will attach in the next step, no trailing slash.
   - `MYSQL_ROOT_PASSWORD` and `MYSQL_PASSWORD`: generate each with `openssl rand -base64 24`.
   The stack refuses to start if any of them is missing.
3. On its **Domains** tab, add the Ghost domain: service `ghost`, container port `2368`, HTTPS on (Let's Encrypt). Point the domain's DNS at the VPS first.
4. Deploy. Both containers should report healthy. Open `https://<ghost-domain>/ghost/` and create the admin account.

Ghost asks new devices for an email verification code. If you have not configured mail, add the `mail__*` variables to the `ghost` service `environment` in the compose file (see Ghost's mail configuration docs) before you log in from a new browser.

## 2. Create the Content API key

1. Ghost Admin → **Settings → Integrations → Add custom integration**, name it `site`.
2. Copy the **Content API Key** and the **API URL** (your Ghost domain). The Admin API key is not used by the site. Do not copy it anywhere.

Recommended: Settings → Labs → turn on **Private site mode** so the Ghost frontend is not indexed as a duplicate of the real blog. The Content API keeps working.

## 3. Deploy the site

1. In Dokploy, create an **Application** from this repository. Build type: **Dockerfile** (path `Dockerfile`).
2. Set these as **build-time** variables or arguments (the Dockerfile reads them as build `ARG`s; they are not kept in the final image):
   - `GHOST_URL`: `https://<ghost-domain>`
   - `GHOST_CONTENT_API_KEY`: the key from step 2
   - `SITE_URL`: `https://<site-domain>` (used for canonical links)
3. Add the site domain on **Domains**: container port `80`, HTTPS on.
4. Deploy. If Ghost is unreachable or rejects the key, the build fails with a message such as `[ghost] https://… answered HTTP 401` and the previous version keeps serving. With the three variables unset the build succeeds and `/blog/` shows "No posts have been published yet".

Check: `https://<site-domain>/blog/` lists your published posts. Drafts and pages never appear.

## 4. Backups

Everything Ghost owns lives in two named volumes, `ghost-db` (MySQL) and `ghost-content` (images and themes). Dokploy prefixes the volume names with the compose project name; list them with `docker volume ls`.

```bash
# database dump (run on the VPS)
docker exec <db-container> sh -c 'mysqldump -uroot -p"$MYSQL_ROOT_PASSWORD" ghost' > ghost-$(date +%F).sql
# images and themes
docker run --rm -v <project>_ghost-content:/data -v "$PWD":/out alpine tar czf /out/ghost-content-$(date +%F).tgz -C /data .
```

Store both off the VPS. The site itself needs no backup: it is rebuilt from Git and Ghost.

## 5. Rebuild the site when you publish

1. In the site Application, open **Deployments** and copy the **Webhook URL**. Treat it as a secret: anyone with it can trigger a deploy.
2. In Ghost Admin open the `site` integration → **Add webhook**, one per event, each with that URL:
   - `Post published`
   - `Published post updated`
   - `Post unpublished`
   - `Post deleted`
3. Publish a test post. A new deployment should appear under **Deployments** within seconds, and the post is live when it completes.

If the webhook is not set up or fails, open the site Application and press **Deploy**: the result is the same.

Editing several posts in a row queues several builds. Remove the webhooks while doing bulk edits if that is noisy.

## Rollback

Redeploy the previous commit of the site Application in Dokploy. Removing the three build variables ships the empty-state blog. Neither touches Ghost's data.
