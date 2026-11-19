// Endereço público do site. Para usar um domínio próprio, defina
// NEXT_PUBLIC_SITE_URL na Vercel (ex.: https://seudominio.com) e faça um novo
// deploy: canonical, Open Graph, links do blog e sitemap passam a usá-lo.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://brunooomelo.vercel.app"
).replace(/\/$/, "");

/**
 * Monta a URL absoluta de uma rota. Usado no canonical e no og:url de cada
 * página — sem isso o next-seo cai no valor padrão e todas as páginas acabam
 * apontando para a home.
 */
export const absoluteUrl = (path = "/") =>
  path === "/" ? siteUrl : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
