import { en, type Dict } from './en';
import { es } from './es';

export type Lang = 'en' | 'es';

const dicts: Record<Lang, Dict> = { en, es };

export const getT = (lang: Lang): Dict => dicts[lang];

/** Prefix an English-site path with the language root: '/#next' becomes '/es/#next'. */
export const localePath = (lang: Lang, path: string): string => (lang === 'es' ? `/es${path}` : path);
