import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Technologies } from '@/components/technologies'
import { CompanyWorked } from '@/components/companies-worked'
import { Projects } from '@/components/projects'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Bruno Melo - Home"
        description="Sou desenvolvedor Fullstack na Stack JS, atualmente construindo SaaS e MicroSaaS"
      />
      <Header />
      <h1 className="text-xl leading-7 tracking-tighter">Prazer, Meu nome é Bruno Melo 👋🏽</h1>
      <h2 className="leading-6"> Eu sou desenvolvedor fullstack na stack Javascript, Sou founder do <Link href="https://mulesstudio.vercel.app" className="text-cyan-400 hover:text-cyan-200 focus:text-cyan-200" target="_blank" rel="noopener noreferrer">Mules Studio</Link> é uma comunidade NFT de Mulas na blockchain da Fantom. Eu atualmente estou construindo a <Link href="https://orcamentosimples.vercel.app" className="text-cyan-400 hover:text-cyan-200 focus:text-cyan-200" target="_blank" rel="noopener noreferrer">OrcamentoSimples</Link>, uma plataforma de criação e gerenciamentos de orçamento para empresas.</h2>
      {/* <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src="https://github.com/leerob/leerob.io/blob/main/public/images/home/reactathon.jpg?raw=true"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src="https://github.com/leerob/leerob.io/blob/main/public/images/home/reactathon.jpg?raw=true"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            fill
            src="https://github.com/leerob/leerob.io/blob/main/public/images/home/reactathon.jpg?raw=true"

            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src="https://github.com/leerob/leerob.io/blob/main/public/images/home/reactathon.jpg?raw=true"

            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src="https://github.com/leerob/leerob.io/blob/main/public/images/home/reactathon.jpg?raw=true"

            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src="https://github.com/leerob/leerob.io/blob/main/public/images/home/reactathon.jpg?raw=true"
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div> */}
      <p className="leading-6">Eu tenho conhecimento sólidos nas seguintes tecnologias ao longo da minha jornada como desenvolvedor:</p>
      <Technologies />

      <p className="leading-6">já trabalhei em empresas como desenvolvedor backend e frontend e até como UI designer</p>
      <CompanyWorked />
      <p className="leading-6">Sou apaixonado em side-projects e <Link aria-label="Conheça mais sobre o build in public no twitter" href="https://twitter.com/hashtag/buildinpublic?src=hashtag_click" className="text-cyan-400 hover:text-cyan-200 focus:text-cyan-200" target="_blank" rel="noopener noreferrer">#BuildinPublic</Link>. Alguns projetos ainda estão ativos e outros já foram descontinuados.</p>
      <Projects />
      <Footer />
    </>
  )
}
