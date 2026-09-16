import { DefaultSeoProps } from "next-seo";
import { siteUrl } from "./src/config/site";

// Sem `canonical`/`openGraph.url` aqui de propósito: um valor global faria
// todas as páginas se declararem como sendo a home. Cada página define os
// seus via <NextSeo canonical={...} openGraph={{ url: ... }} />.
const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bruno Melo Personal Website",
    description:
      "Desenvolvedor fullstack JavaScript. Escrevo sobre os bugs que me custaram tempo demais, e conto o que eu construí e o que eu desliguei.",
    images: [
      {
        url: `${siteUrl}/home/cover.png`,
        width: 1280,
        height: 720,
        alt: "Bruno Melo Personal Website",
      },
    ],
  },
  twitter: {
    handle: "@brunooomelo",
    site: "@brunooomelo",
    cardType: "summary_large_image",
  },
};

export default config;
