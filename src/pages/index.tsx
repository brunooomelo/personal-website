import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompanyWorked } from "@/components/companies-worked";
import { Projects } from "@/components/projects";
import { Cases } from "@/components/cases";
import { absoluteUrl } from "@/config/site";
import { getDictionary, toLocale } from "@/i18n/home";

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
        {t.intro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section id="cases" className="flex flex-col gap-3">
        <h2>{t.cases.heading}</h2>
        <p className="text-ink-300">{t.cases.lead}</p>
        <Cases items={t.cases.items} labels={t.cases.labels} />
      </section>

      {/* Mesmo padrão de rótulo em mono à esquerda usado nos cases. */}
      <section className="flex flex-col gap-3">
        <h2>{t.stack.heading}</h2>
        <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[9rem_1fr]">
          {t.stack.groups.map((group) => (
            <div key={group.area} className="contents">
              <dt className="font-mono text-[11px] uppercase tracking-[0.05em] text-ink-400 sm:pt-1.5">
                {group.area}
              </dt>
              <dd className="-mt-2 min-w-0 text-ink-300 sm:mt-0">
                {group.items}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="flex flex-col gap-3">
        <p>{t.companies}</p>
        <CompanyWorked />
      </section>

      <section className="flex flex-col gap-3">
        <p>{t.projects.lead}</p>
        <Projects locale={locale} archivedLabel={t.projects.archived} />
      </section>
      <Footer />
    </>
  );
}
