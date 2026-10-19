# Spec Delta

## Purpose
Defines the blog section of the Dash AI site: how posts written in Ghost are listed and read at `/blog/`, and how the site behaves when Ghost content is unavailable.

## ADDED Requirements

### Requirement: Blog index
The site SHALL serve a page at `/blog/` that lists every published Ghost post, newest first, showing each post's title, publication date, excerpt and primary tag when it has one, and linking to the post page. The page SHALL use the shared site header, footer and theme switch.

#### Scenario: Posts exist
- **WHEN** a visitor opens `/blog/` and Ghost has published posts at the time of the build
- **THEN** the page lists them newest first, and each entry links to `/blog/<slug>/`

#### Scenario: No posts yet
- **WHEN** Ghost is configured but has no published posts
- **THEN** `/blog/` renders an empty state that says no posts have been published yet, with no broken links

#### Scenario: Drafts and pages
- **WHEN** Ghost holds drafts, scheduled posts or static pages
- **THEN** none of them appear on the site

### Requirement: Post page
The site SHALL serve one page per published post at `/blog/<slug>/` that shows the title, publication date, reading time, tags, feature image when present, and the full post body as published in Ghost, with a link back to the index.

#### Scenario: Read a post
- **WHEN** a visitor opens `/blog/<slug>/` for a published post
- **THEN** the page shows the post content with images, headings, code blocks and links as authored in Ghost

#### Scenario: Unknown slug
- **WHEN** a visitor opens `/blog/<slug>/` for a slug that is not published
- **THEN** the server answers 404

#### Scenario: Page metadata
- **WHEN** a post page is served
- **THEN** its title and meta description come from the post (custom Ghost meta fields first, then title and excerpt), and the page includes a canonical URL on the Dash AI site

### Requirement: Content freshness
The site SHALL reflect Ghost content as of its most recent build. Publishing, editing, unpublishing or deleting a post in Ghost SHALL be visible on the site after the next build, which the deployment can trigger automatically.

#### Scenario: Post published
- **WHEN** an editor publishes a post in Ghost and the site is rebuilt
- **THEN** the post appears at the top of `/blog/` and at its own URL

#### Scenario: Post unpublished
- **WHEN** an editor unpublishes a post and the site is rebuilt
- **THEN** its URL answers 404 and it no longer appears in the index

### Requirement: Behavior without Ghost
The build SHALL NOT silently ship an empty blog because Ghost failed. If the Ghost URL and Content API key are not configured, the build SHALL complete with an empty-state blog and a visible warning. If they are configured but Ghost cannot be reached or rejects the request, the build SHALL fail with a message naming the cause.

#### Scenario: Not configured
- **WHEN** the site is built with no Ghost URL or key set
- **THEN** the build succeeds, logs a warning that the blog is unconfigured, and `/blog/` shows the empty state

#### Scenario: Ghost unreachable
- **WHEN** the site is built with a Ghost URL and key set and Ghost is down or returns an error
- **THEN** the build exits with a non-zero status and the message names the URL and the HTTP status or network error

### Requirement: Navigation
The site header and footer navigation SHALL include a Blog link, marked as the current page on blog routes.

#### Scenario: Nav link
- **WHEN** a visitor views any page
- **THEN** the header and footer contain a link to `/blog/`, and on `/blog/` and post pages the header link is marked `aria-current="page"`

### Requirement: Accessible reading experience
Blog pages SHALL meet the same accessibility bar as the rest of the site: semantic headings, keyboard operable links, visible focus, sufficient contrast in light and dark themes, and images from posts keep the alt text set in Ghost. Post body content SHALL NOT overflow the viewport at phone width.

#### Scenario: Long code or wide image
- **WHEN** a post contains a long code line or a wide image and the viewport is 375px wide
- **THEN** the page does not scroll horizontally; the code block scrolls inside itself and the image scales down
