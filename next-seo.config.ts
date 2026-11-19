import { DefaultSeoProps } from "next-seo";
import { siteUrl } from "./src/config/site";

// Sem `canonical`/`openGraph.url` aqui de propósito: um valor global faria
// todas as páginas se declararem como sendo a home. Cada página define os
// seus via <NextSeo canonical={...} openGraph={{ url: ... }} />.
const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bruno Melo",
    description:
      "Forward Deployed Engineer: conecto o produto aos sistemas do cliente, adapto IA para cada caso e coloco em produção.",
    images: [
      {
        url: `${siteUrl}/home/cover.png`,
        width: 1280,
        height: 720,
        alt: "Bruno Melo, Forward Deployed Engineer",
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
