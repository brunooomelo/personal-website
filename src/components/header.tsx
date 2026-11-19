import { pageview } from "@/utils/gtag";
import Link from "next/link";
import { useRouter } from "next/router";
import { getDictionary, toLocale } from "@/i18n/home";

const pages = [
  {
    label: "home",
    url: "/",
  },
  {
    label: "blog",
    url: "/blog",
  },
  {
    label: "guestbook",
    url: "/guestbook",
  },
  {
    label: "uses",
    url: "/uses",
  },
];

const isActive = (route: string, url: string) =>
  route === url || (url !== "/" && route.startsWith(url));

// Seta diagonal desenhada em traço fino, no lugar de um ícone de biblioteca:
// herda a cor do texto e escala com o font-size do link.
const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    className="h-[1.1em] w-[1.1em] fill-none stroke-current transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    strokeWidth={1.4}
    strokeLinecap="square"
  >
    <path d="M5 19 19 5M5 5h14v14" />
  </svg>
);

/**
 * Header no estilo "editorial": monograma grande em sans, nome + tagline em
 * mono miúdo ao lado, e um CTA discreto à direita. A navegação fica na mesma
 * linha no desktop e desce para uma linha própria no mobile.
 */
export const Header = () => {
  const { route, asPath, locale: rawLocale } = useRouter();
  const locale = toLocale(rawLocale);
  const t = getDictionary(locale).header;
  const otherLocale = locale === "en" ? "pt-BR" : "en";

  return (
    <header className="w-full flex flex-wrap items-center gap-x-6 gap-y-5 pt-4 pb-2">
      <Link
        href="/"
        aria-label="Bruno Melo — página inicial"
        className="font-sans font-bold text-[34px] md:text-[39px] leading-[0.8] tracking-[-0.1em]"
      >
        bm
        <span className="font-mono font-normal text-[10px] tracking-normal align-top ml-1.5">
          ®
        </span>
      </Link>

      <Link
        href="/"
        tabIndex={-1}
        className="font-mono text-[10px] md:text-[11px] leading-relaxed tracking-[0.05em] uppercase"
      >
        Bruno Melo
        <span className="block text-[9px] text-ink-400">
          {t.tagline}
        </span>
      </Link>

      <Link
        href="https://github.com/brunooomelo"
        target="_blank"
        rel="me noopener noreferrer"
        aria-label={t.followAria}
        className="group ml-auto flex items-center gap-2.5 p-2 -m-2 font-mono text-[10px] tracking-[0.05em] uppercase text-accent transition-colors hover:text-ink-50"
      >
        {/* No mobile só a seta aparece (maior), igual a referência. */}
        <span className="hidden sm:inline">{t.follow}</span>
        <span className="text-[22px] sm:text-[10px] flex">
          <ArrowUpRight />
        </span>
      </Link>

      <nav
        aria-label={locale === "en" ? "Main" : "Principal"}
        className="w-full flex items-center gap-6 border-t border-ink-700 pt-3 font-mono text-[11px] tracking-[0.05em] uppercase"
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {pages.map((page) => {
            const active = isActive(route, page.url);
            return (
              <li key={page.label}>
                <Link
                  aria-current={active ? "page" : undefined}
                  href={page.url}
                  onClick={() => pageview(page.url)}
                  className={`transition-colors ${
                    active
                      ? "text-ink-50 underline underline-offset-4"
                      : "text-ink-400 hover:text-ink-50"
                  }`}
                >
                  {page.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Troca de idioma mantendo a página atual. */}
        <Link
          href={asPath}
          locale={otherLocale}
          hrefLang={otherLocale}
          aria-label={t.switchAria}
          className="ml-auto text-ink-400 transition-colors hover:text-ink-50"
        >
          {t.switchTo}
        </Link>
      </nav>
    </header>
  );
};
