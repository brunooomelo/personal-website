import { Analytics } from "@/components/analytics";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </Html>
  );
}
