import "@/styles/globals.css";
import { Space_Mono } from "next/font/google";
import type { AppProps } from "next/app";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
const font = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="ahrefs-site-verification" content="0ff7ff9de03f88bcd24fe4511f725298dc7d90f3c915636975575d8b463daf90"></meta>
        <meta name="google-site-verification" content="u5_Q-zBHGVK6bNT5-QHCHY48fxC-IoqAxYo-H2BLhJQ" />
      </Head>
      <DefaultSeo {...SEO} />
      <main
        className={`max-w-3xl mx-auto ${font.className} p-6 flex flex-col gap-8`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
