import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { FiArrowUpRight } from 'react-icons/fi'
import { SiEthereum, SiFigma, SiFirebase, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Tooltip } from '@/components/tooltip'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Bruno Melo - Home"
      />
      <Header />
      <h1 className="text-xl leading-7 tracking-tighter">Prazer, Meu nome é Bruno Melo 👋🏽</h1>
      <span className="leading-6"> Eu sou desenvolvedor fullstack na stack Javascript, Sou founder do <Link href="https://mulesstudio.vercel.app" className="text-cyan-400 hover:text-cyan-200 focus:text-cyan-200" target="_blank" rel="noopener noreferrer">Mules Studio</Link> é uma comunidade NFT de Mulas na blockchain da Fantom. Eu atualmente estou construindo a <Link href="https://orcamentosimples.vercel.app" className="text-cyan-400 hover:text-cyan-200 focus:text-cyan-200" target="_blank" rel="noopener noreferrer">OrcamentoSimples</Link>, uma plataforma de criação e gerenciamentos de orçamento para empresas.</span>
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
      <span className="leading-6">Eu tenho conhecimento sólidos nas seguintes tecnologias ao longo da minha jornada como desenvolvedor:</span>
      <section className="flex gap-4 flex-wrap justify-center">
        <TooltipPrimitive.Provider>
          <Tooltip content="javascript">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] md:w-[90px] h-[100px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiJavascript size={52} />
            </button>
          </Tooltip>
          <Tooltip content="typescript">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiTypescript size={52} />
            </button>
          </Tooltip>
          <Tooltip content="html5">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiHtml5 size={52} />
            </button>
          </Tooltip>
          <Tooltip content="Tailwindcss">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiTailwindcss size={52} />
            </button >
          </Tooltip>
          <Tooltip content="Node.JS">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiNodedotjs size={52} />
            </button>
          </Tooltip>
          <Tooltip content="Next.JS">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiNextdotjs size={52} />
            </button>
          </Tooltip>
          <Tooltip content="Firebase">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiFirebase size={52} />
            </button>
          </Tooltip>
          <Tooltip content="Postgres">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiPostgresql size={52} />
            </button>
          </Tooltip>

          <Tooltip content="MongoDB">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiMongodb size={52} />
            </button>
          </Tooltip>
          <Tooltip content="Figma">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiFigma size={52} />
            </button>
          </Tooltip>
          <Tooltip content="Web3/Ethereum">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiEthereum size={52} />
            </button>
          </Tooltip>
          <Tooltip content="Git">
            <button type="button" className="w-[90px] min-[514px]:w-[120px] h-[100px] md:w-[90px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
              <SiGit size={52} />
            </button>
          </Tooltip>
        </TooltipPrimitive.Provider>
      </section>

      <span className="leading-6">já trabalhei em empresas como desenvolvedor backend e frontend e até como UI designer</span>
      <section className="flex gap-2 flex-wrap justify-center">
        <Link href="https://provi.com.br" target="_blank" rel="noopener noreferrer" className="w-[150px] min-[514px]:w-[200px] sm:w-[250px] md:w-[170px] h-[100px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
          <Image src='/home/provi.svg' alt="Logo da Provi" height={37} width={125} />
        </Link >
        <Link href="https://www.linkedin.com/company/popstand/" target="_blank" rel="noopener noreferrer" className="w-[150px] min-[514px]:w-[200px] sm:w-[250px] md:w-[170px] h-[100px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
          <Image src='/home/popstand.svg' alt="Loga da Popstand" height={30} width={135} />
        </Link>
        <Link href="https://logisticag2l.com.br" target="_blank" rel="noopener noreferrer" className="w-[150px] min-[514px]:w-[200px] sm:w-[250px] md:w-[170px] h-[100px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
          <Image src='/home/g2l.svg' alt="Logo da Logistica G2L" height={46} width={96} />
        </Link>
        <Link href="https://www.polowear.com.br" target="_blank" rel="noopener noreferrer" className="w-[150px] min-[514px]:w-[200px] sm:w-[250px] md:w-[170px] h-[100px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
          <Image src='/home/polowear.svg' alt="Logo da Polowear" height={24} width={125} />
        </Link>
      </section>
      <span className="leading-6">Sou apaixonado em side-projects e <Link href="https://twitter.com/hashtag/buildinpublic?src=hashtag_click" className="text-cyan-400 hover:text-cyan-200 focus:text-cyan-200" target="_blank" rel="noopener noreferrer">#BuildinPublic</Link>. Alguns projetos ainda estão ativos e outros já foram descontinuados.</span>
      <section className="flex flex-col gap-4">
        <Link href="https://orcamentosimples.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="flex p-4 items-center bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded" >
            <div className="flex flex-col justify-between flex-1 gap-8">
              <h2 className="leading-6">
                Orçamentos simples
              </h2>
              <p className="leading-6">SaaS para criação e gerenciamento de orçamentos</p>
            </div>
            <FiArrowUpRight size={24} />
          </div>
        </Link>
        <Link href="https://mulesstudio.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="flex p-4 items-center bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded" >
            <div className="flex flex-col justify-between flex-1 gap-8">
              <h2 className="leading-6">
                Mules Studio
              </h2>
              <p className="leading-6"> Uma comunidade NFT de Mulas na Blockchain da Fantom.</p>
            </div>
            <FiArrowUpRight size={24} />
          </div>
        </Link>
        <Link href="https://github.com/brunooomelo/picpay-js" target="_blank" rel="noopener noreferrer">
          <div className="flex p-4 items-center bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded" >
            <div className="flex flex-col justify-between flex-1 gap-8">
              <div className="flex gap-4 flex-1 align-baseline">
                <h2 className="leading-6">
                  Picpac-js
                </h2>
                <span className="border px-2 rounded text-sm">Archived</span>
              </div>
              <p className="leading-6"> Uma Javascript SDK para API Rest do Picpay Ecommerce</p>
            </div>
            <FiArrowUpRight size={24} />
          </div>
        </Link>
        <Link href="https://github.com/brunooomelo/lottery" target="_blank" rel="noopener noreferrer">
          <div className="flex p-4 items-center bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded" >
            <div className="flex flex-col justify-between flex-1 gap-8">
              <div className="flex gap-4 flex-1 align-baseline">
                <h2 className="leading-6">
                  Lottery
                </h2>
                <span className="border px-2 rounded text-sm">Archived</span>
              </div>
              <p className="leading-6">CLI para receber resultados da Loteria Brasileira</p>
            </div>
            <FiArrowUpRight size={24} />
          </div>
        </Link>
      </section>
      <Footer />
    </>
  )
}
