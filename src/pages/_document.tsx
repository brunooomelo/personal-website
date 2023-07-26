import { Html, Head, Main, NextScript } from 'next/document'

const title = "Bruno Melo"
const description = "Sou desenvolvedor Fullstack na Stack JS, atualmente construindo SaaS e MicroSaaS"
export default function Document() {
  return (
    <Html lang="pt">
      <Head title={description}>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta
          property='og:description'
          content={description}
        />
        <meta property='og:url' content='https://brunooomelo.vercel.app' />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
        <meta name="ahrefs-site-verification" content="0ff7ff9de03f88bcd24fe4511f725298dc7d90f3c915636975575d8b463daf90"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
