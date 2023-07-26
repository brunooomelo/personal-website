import '@/styles/globals.css'
import { Space_Mono } from 'next/font/google'
import type { AppProps } from 'next/app'
const font = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`max-w-3xl mx-auto ${font.className} p-6 flex flex-col gap-8`}>
    <Component {...pageProps} />
  </main>

}
