import { Header } from "@/components/header";
import UsesJSON from "../../public/uses.json";
import { NextSeo } from "next-seo";

const Uses = () => {
  return (
    <>
      <NextSeo
        title="Bruno Melo - My Setup"
        description="My Setup é onde você ira conhecer meu setup, meus aplicativos e algumas curiosidades sobre meu ambiente de trabalho e hobby."
      />
      <Header />
      <h1>Meu Setup</h1>
      <div className="flex flex-col gap-4">
        {Object.keys(UsesJSON).map((key) => (
          <>
            <h3 key={key}>{key}</h3>
            <ul>
              {(UsesJSON as Record<string, string[]>)[key].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </>
  );
};
export default Uses;
