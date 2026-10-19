# Spec Delta

## Purpose
Defines how the Dash AI site and its Ghost backend are deployed on a Dokploy-managed VPS, what configuration each needs, and how publishing a post refreshes the live site.

## ADDED Requirements

### Requirement: Ghost stack definition
The repository SHALL include a Docker Compose definition that runs a self-hosted Ghost instance with MySQL, with persistent volumes for the database and Ghost content, health checks, and no secrets committed to git. All environment-specific values, including the public URL and database passwords, SHALL be supplied through environment variables that an `.env.example` file lists.

#### Scenario: Deploy Ghost
- **WHEN** an operator deploys the Ghost compose file in Dokploy with the documented variables set and a domain attached
- **THEN** Ghost starts, reports healthy, and serves its admin at `/ghost/` on that domain

#### Scenario: Restart keeps data
- **WHEN** the Ghost or MySQL container is recreated
- **THEN** posts, images and settings are still present because they live on named volumes

#### Scenario: Missing secret
- **WHEN** a required variable such as the database password is not set
- **THEN** the stack refuses to start instead of falling back to a default password

### Requirement: Site image configuration
The site image SHALL be buildable from the repository `Dockerfile` with the Ghost URL and Content API key passed as build arguments, and SHALL serve the static output with nginx on port 80. The resulting image SHALL NOT contain the Admin API key, database credentials or any other secret.

#### Scenario: Build with Ghost
- **WHEN** the image is built with `GHOST_URL` and `GHOST_CONTENT_API_KEY` as build arguments
- **THEN** the build fetches posts from that Ghost, and the image serves them as static pages

#### Scenario: Build without Ghost
- **WHEN** the image is built with no build arguments
- **THEN** the build succeeds with the unconfigured-blog behavior defined in the blog capability

### Requirement: Automatic rebuild on publish
The deployment guide SHALL describe a Ghost webhook configuration that calls the Dokploy deploy trigger for the site service when a post is published, updated, unpublished or deleted, and SHALL state how to confirm that the trigger fired.

#### Scenario: Publish triggers deploy
- **WHEN** an editor publishes a post in Ghost with the documented webhooks configured
- **THEN** Dokploy starts a new deployment of the site, and the post is live once it completes

#### Scenario: Manual fallback
- **WHEN** the webhook is not configured or fails
- **THEN** the guide's manual redeploy step in Dokploy produces the same result

### Requirement: Deployment guide
The repository SHALL include a deployment guide that walks an operator through creating the two Dokploy services in order (Ghost first, then the site), the domains and TLS each needs, the environment and build arguments, how to create the Ghost Content API key, the Ghost settings required for headless use, and how to back up the volumes.

#### Scenario: Follow the guide
- **WHEN** an operator with a Dokploy VPS and two domains follows the guide from the top
- **THEN** they end with Ghost reachable on its domain, the site reachable on its domain, and `/blog/` listing a post they published
