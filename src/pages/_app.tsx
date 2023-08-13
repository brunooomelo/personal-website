import "@/styles/globals.css";
import { Space_Mono } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { SessionProvider } from "next-auth/react";

import SEO from "../../next-seo.config";

const font = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="ahrefs-site-verification"
          content="0ff7ff9de03f88bcd24fe4511f725298dc7d90f3c915636975575d8b463daf90"
        ></meta>
        <meta
          name="google-site-verification"
          content="u5_Q-zBHGVK6bNT5-QHCHY48fxC-IoqAxYo-H2BLhJQ"
        ></meta>
      </Head>
      <DefaultSeo {...SEO} />
      <SessionProvider session={session}>
        <main
          className={`max-w-3xl mx-auto ${font.className} p-6 flex flex-col gap-8`}
        >
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
}
