export const siteUrl = "https://brunooomelo.vercel.app";

/**
 * Monta a URL absoluta de uma rota. Usado no canonical e no og:url de cada
 * página — sem isso o next-seo cai no valor padrão e todas as páginas acabam
 * apontando para a home.
 */
export const absoluteUrl = (path = "/") =>
  path === "/" ? siteUrl : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
