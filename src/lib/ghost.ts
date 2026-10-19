// Read-only access to the Ghost Content API, used at build time.
// Unset config means "no blog yet" (warn, return nothing); a configured Ghost
// that fails must fail the build, so a bad deploy never ships an empty blog.

export interface GhostTag { name: string; slug: string }
export interface GhostPost {
  slug: string;
  title: string;
  html: string;
  excerpt: string;
  feature_image: string | null;
  feature_image_alt: string | null;
  published_at: string;
  reading_time: number;
  primary_tag: GhostTag | null;
  tags: GhostTag[];
  meta_title: string | null;
  meta_description: string | null;
}

const env = (k: string): string => (import.meta.env[k] ?? process.env[k] ?? '').trim();

// Code blocks and tables scroll sideways on small screens; make them reachable by keyboard.
const focusableScrollers = (html: string): string => html.replace(/<(pre|table)(?=[\s>])/g, '<$1 tabindex="0"');

let warned = false;

export async function getPosts(): Promise<GhostPost[]> {
  const url = env('GHOST_URL').replace(/\/+$/, '');
  const key = env('GHOST_CONTENT_API_KEY');
  if (!url || !key) {
    if (!warned) {
      warned = true;
      console.warn('[ghost] GHOST_URL or GHOST_CONTENT_API_KEY is not set: the blog will be empty.');
    }
    return [];
  }

  const api = `${url}/ghost/api/content/posts/?${new URLSearchParams({
    key, include: 'tags', formats: 'html', limit: 'all', order: 'published_at desc',
  })}`;
  let res: Response;
  try {
    res = await fetch(api);
  } catch (e) {
    throw new Error(`[ghost] could not reach ${url}: ${(e as Error).message}`);
  }
  if (!res.ok) throw new Error(`[ghost] ${url} answered HTTP ${res.status} ${res.statusText}`);
  const { posts } = (await res.json()) as { posts: GhostPost[] };
  return posts.map((p) => ({ ...p, html: focusableScrollers(p.html) }));
}
