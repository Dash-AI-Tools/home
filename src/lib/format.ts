import { getT, type Lang } from '../i18n';

export const formatDate = (iso: string, lang: Lang = 'en'): string =>
  new Date(iso).toLocaleDateString(getT(lang).dateLocale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
