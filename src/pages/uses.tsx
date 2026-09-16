import { Header } from "@/components/header";
import UsesJSON from "../../public/uses.json";
import { NextSeo } from "next-seo";
import { absoluteUrl } from "@/config/site";

const Uses = () => {
  return (
    <>
      <NextSeo
        title="Bruno Melo - My Setup"
        description="My Setup é onde você ira conhecer meu setup, meus aplicativos e algumas curiosidades sobre meu ambiente de trabalho e hobby."
        canonical={absoluteUrl("/uses")}
        openGraph={{ url: absoluteUrl("/uses") }}
      />
      <Header />
      <h1>Meu Setup</h1>
      <div className="flex flex-col gap-8">
        {Object.entries(UsesJSON as Record<string, string[]>).map(
          ([section, items]) => (
            // Cada título fica colado na sua lista (gap-3) e as seções se
            // separam pelo gap-8 do contêiner: é a proximidade que agrupa.
            <section key={section} className="flex flex-col gap-3">
              <h2>{section}</h2>
              <ul className="flex flex-col gap-1">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ),
        )}
      </div>
    </>
  );
};
export default Uses;
