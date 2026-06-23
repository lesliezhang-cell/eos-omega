export const languages = {
  en: 'EN',
  zh: '中文',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

// Deployment base path (e.g. "/eos-omega" on GitHub Pages, "" at root).
const RAW_BASE = import.meta.env.BASE_URL || '/';
const BASE = RAW_BASE.replace(/\/$/, '');

/** Remove the deployment base prefix so routing logic is base-agnostic. */
function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) return pathname.slice(BASE.length) || '/';
  return pathname;
}

/** Detect the active language from the request URL (/zh/... => zh). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = stripBase(url.pathname).split('/');
  if (seg === 'zh') return 'zh';
  return 'en';
}

/** Build a locale-aware, base-aware href. en -> "{base}/path", zh -> "{base}/zh/path". */
export function localizePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '').replace(/\/+$/, '');
  const seg = clean === '/' ? '' : clean;
  const langPart = lang === 'en' ? '' : '/zh';
  return BASE + langPart + seg || '/';
}

/** Given the current URL + a target lang, return the equivalent base-aware path. */
export function switchLangPath(url: URL, target: Lang): string {
  let path = stripBase(url.pathname);
  path = path.replace(/^\/zh(\/|$)/, '/');
  path = '/' + path.replace(/^\/+/, '');
  if (target === 'zh') {
    path = path === '/' ? '/zh' : `/zh${path}`;
  }
  path = path.replace(/\/$/, '') || '/';
  return BASE + (path === '/' ? '' : path) || '/';
}
