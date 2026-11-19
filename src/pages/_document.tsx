import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

// O `lang` acompanha o idioma da rota (/en = inglês).
export default function Document({ locale }: DocumentProps) {
  return (
    <Html lang={locale ?? "pt-BR"}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
