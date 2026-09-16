import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Inter, Space_Mono } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { DefaultSeo } from "next-seo";
import { SessionProvider } from "next-auth/react";

import SEO from "../../next-seo.config";
import { Analytics } from "@/components/analytics";

// Mono continua sendo a personalidade do site — títulos, menu, metadados e
// código. O texto corrido vai para uma sans neutra: monoespaçada cansa em
// parágrafo longo, e o blog é justamente texto longo.
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <main
            className={`${sans.variable} ${mono.variable} font-sans max-w-3xl mx-auto p-6 flex flex-col gap-8`}
          >
            <Component {...pageProps} />
          </main>
        </SessionProvider>
      </QueryClientProvider>
      <Analytics />
    </>
  );
}
