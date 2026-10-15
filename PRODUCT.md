# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (user's choice). Deploy target not decided.

## Users

Developers and platform teams who evaluate, self-host and contribute to open-source tooling. They arrive from GitHub, search or word of mouth, and are deciding whether a Dash AI project is worth starring, cloning or trying.

## Product Purpose
The page also introduces Dash AI briefly, gives each project a short description, and asks visitors what Dash AI should build next (survey). The Dash AI description is draft copy inferred from its two tools; the user has not supplied a mission statement.


The homepage for Dash AI's open-source projects (GitHub org `Dash-AI-Tools`). It presents the projects, makes each one easy to understand quickly, and sends developers to the repo or quickstart. Success is a visit that ends in a star, a clone or a try.

Projects shown (the user ruled that the `forkflame-*` repos are not real projects and must not appear on the page):
- **DocMyRepos** (live, MIT, TypeScript, `Dash-AI-Tools/doc-my-repos`): searches and showcases the Markdown documentation of all repositories in a GitHub organization in one place.
- **openspec-hud** (live, `Dash-AI-Tools/openspec-hud`, TypeScript, v0.3.0 per its plugin.json, repo created 2026-10-15): a Claude Code mod that shows an OpenSpec HUD in a side panel (fullscreen UI, 110+ columns) or as an inline bar above the prompt. Shows skill/step, change, tasks, running agents, MCP calls, context and usage. Install per its README: `/plugin install openspec-hud --marketplace davidcp90/mods`. The repo has no license file and no GitHub description yet. Its two screenshots are copied to `public/openspec-hud/`.

## Positioning

DocMyRepos syncs the `docs/` folder of chosen org repositories into Postgres, gives each repo its own space and gives the whole org one search box. It has first-class support for Open Knowledge Format (OKF) as well as plain Markdown. It is self-hostable and authenticates as a read-only GitHub App installation, never a personal access token. GitHub is not called while browsing.

## Operating Context

Visitors are on desktop or laptop for evaluation and often on mobile when following a link. They scan for what the project is, whether it is maintained, how to run it, and its license. The org lives on GitHub and the repos carry real docs, a quickstart and MIT licensing.

## Capabilities and Constraints

DocMyRepos facts (from its README):
- Per-repository space: README, CODEOWNERS, docs tree.
- GitHub-flavored Markdown, Shiki syntax highlighting, Mermaid diagrams, sanitized output (documents are untrusted; `.mdx` is never executed).
- Full-text search over Postgres with weighted title/headings/description/body, highlighted snippets, facets and a Ctrl/Cmd+K palette.
- OKF-aware filtering by type, tags and status, plus a metadata view. Repos without OKF show no OKF interface.
- Light and dark themes, GitHub push-webhook re-sync, self-hostable (Next.js + Postgres, Docker).
- Real screenshots exist in the repo under `docs-assets/screenshots/` (home, repo, doc, search, palette, OKF filters, OKF metadata; light and dark).

Org facts: `forkflame-api`, `forkflame-web` and `forkflame-ops` are sample documentation repos, not real products: never list or link them as projects. `handbook-private` is private and must not be shown or linked.

Undecided: deploy target, domain, openspec-hud details, a project tagline for the org.

## Brand Commitments

Brand is **Dash AI**. Assets in `assets/`: `dash.png` (mark only), `dash-horizontal.png` (mark + wordmark, horizontal), `dash-square.png` (mark + wordmark, stacked). The mark is a navy rounded slab beside a violet parallelogram slash, approximately navy `#12224A` and violet `#7B2FF7`. The wordmark is "Dash" in a bold geometric sans with "AI" in a light weight. All assets are on white with generous padding and will need cropping and possibly vectorizing.

## Evidence on Hand

- DocMyRepos README, MIT license, CI workflow and screenshot set (see above).
- No testimonials, user counts, stars, benchmarks or customers exist. Do not fabricate them.
- No openspec-hud material exists yet.

## Product Principles

1. Show the real thing. Prefer DocMyRepos' actual screenshots and facts over generic illustration.
2. Be honest about status. Live, upcoming and sample are labeled as such, and nothing is invented for openspec-hud.
3. Developer-first clarity. What it is, how to run it and the license are visible fast, and the GitHub link is always one step away.
4. Built to grow. A new project must be easy to add without redesign.
5. Public only. Private repos never appear.

## Accessibility & Inclusion

No product-specific requirement stated. Default to WCAG AA, with light and dark themes in line with DocMyRepos.
