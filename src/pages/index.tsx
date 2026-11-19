import Link from "next/link";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Cases } from "@/components/cases";
import { absoluteUrl } from "@/config/site";
import { contactLinks, getDictionary, toLocale } from "@/i18n/home";

export default function Home() {
  const locale = toLocale(useRouter().locale);
  const t = getDictionary(locale);
  const url = absoluteUrl(locale === "en" ? "/en" : "/");

  return (
    <>
      <NextSeo
        title={t.seo.title}
        description={t.seo.description}
        canonical={url}
        openGraph={{
          url,
          locale: locale === "en" ? "en_US" : "pt_BR",
          description: t.seo.description,
        }}
        languageAlternates={[
          { hrefLang: "pt-BR", href: absoluteUrl("/") },
          { hrefLang: "en", href: absoluteUrl("/en") },
          { hrefLang: "x-default", href: absoluteUrl("/") },
        ]}
      />
      <Header />

      <section className="flex flex-col gap-3">
        <h1>{t.intro.heading}</h1>
        <p>{t.intro.text}</p>
      </section>

      <section id="cases" className="flex flex-col gap-3">
        <h2>{t.cases.heading}</h2>
        <Cases items={t.cases.items} resultLabel={t.cases.resultLabel} />
      </section>

      <section className="flex flex-col gap-3">
        <h2>{t.projects.heading}</h2>
        <Projects locale={locale} archivedLabel={t.projects.archived} />
      </section>

      <section id="contato" className="flex flex-col gap-3">
        <h2>{t.contact.heading}</h2>
        <p className="text-ink-300">{t.contact.text}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.05em]">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-accent underline underline-offset-4 transition-colors hover:text-ink-50"
              >
                {link.label} ↗
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
