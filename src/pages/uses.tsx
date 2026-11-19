import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Header } from "@/components/header";
import { PageTitle } from "@/components/page-title";
import { absoluteUrl } from "@/config/site";
import { getPagesDictionary } from "@/i18n/pages";

const Uses = () => {
  const t = getPagesDictionary(useRouter().locale).uses;

  return (
    <>
      <NextSeo
        title="Bruno Melo - Setup"
        description={t.seo}
        canonical={absoluteUrl("/uses")}
        openGraph={{ url: absoluteUrl("/uses") }}
      />
      <Header />
      <PageTitle eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      {/* Mesmo padrão rótulo-à-esquerda dos cases. */}
      <dl className="grid gap-x-6 gap-y-5 border-t border-ink-500 pt-6 sm:grid-cols-[11rem_1fr]">
        {t.sections.map(({ title: section, items }) => (
            <div key={section} className="contents">
              <dt className="font-mono text-[11px] uppercase tracking-[0.05em] text-ink-400 sm:pt-1.5">
                {section}
              </dt>
              <dd className="-mt-3 min-w-0 sm:mt-0">
                <ul className="flex flex-col">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
        ))}
      </dl>
    </>
  );
};
export default Uses;
