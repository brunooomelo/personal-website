import Link from "next/link";
import { useRouter } from "next/router";
import { contactLinks } from "@/i18n/home";
import { getPagesDictionary } from "@/i18n/pages";

/**
 * Rodapé do site inteiro: monograma pequeno, nome e função, redes e "voltar
 * ao topo". Fica no _app, então toda página termina do mesmo jeito.
 */
export const Footer = () => {
  const { locale } = useRouter();
  const t = getPagesDictionary(locale).footer;

  return (
    <footer className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-ink-700 pt-6 font-mono text-[10px] uppercase tracking-[0.05em]">
      <span
        aria-hidden="true"
        className="font-sans text-[26px] font-bold normal-case leading-[0.8] tracking-[-0.1em]"
      >
        bm
      </span>
      <p className="text-ink-400">
        © {new Date().getFullYear()} Bruno Melo · {t.role}
      </p>

      <nav aria-label={t.linksLabel} className="flex flex-wrap gap-x-5 gap-y-2 sm:ml-auto">
        {contactLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="me noopener noreferrer"
            className="text-ink-300 transition-colors hover:text-ink-50"
          >
            {link.label}
          </Link>
        ))}
        <a href="#top" className="text-ink-300 transition-colors hover:text-ink-50">
          {t.backToTop} ↑
        </a>
      </nav>
    </footer>
  );
};
