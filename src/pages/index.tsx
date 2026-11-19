import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Technologies } from "@/components/technologies";
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

      <section className="flex flex-col gap-3">
        <p>{t.technologies}</p>
        <Technologies />
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
