import Image from 'next/image'
import { Header } from '@/components/header'
import { FiArrowUpRight } from 'react-icons/fi'
import { SiEthereum, SiFigma, SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript, SiLinkedin, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiTailwindcss, SiTwitter, SiTypescript } from 'react-icons/si'
import Link from 'next/link'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bruno Melo</title>
      </Head>
      <Header />
      <h1 className="text-xl leading-7 tracking-tighter">Prazer, Meu nome é Bruno Melo 👋🏽</h1>
      <span className="leading-6"> Eu sou desenvolvedor fullstack na stack Javascript, Sou founder do Mules Studio é uma comunidade NFT de Mulas na blockchain da Fantom. Eu atualmente estou construindo a orcamentosimples uma plataforma de criação e gerenciamentos de orçamento para empresas.</span>
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
      <div className="flex gap-4 flex-wrap">
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiJavascript size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiTypescript size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiHtml5 size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiTailwindcss size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiNodedotjs size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiNextdotjs size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiFirebase size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiPostgresql size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiMongodb size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiFigma size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiEthereum size={52} />
        </div>
        <div className="w-[90px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <SiGit size={52} />
        </div>
      </div>

      <span className="leading-6">já trabalhei em empresas como desenvolvedor backend e frontend e até como UI designer</span>
      <div className="flex gap-2 flex-wrap">
        <div className="w-[150px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <Image src='/home/provi.svg' alt="g2l" height={37} width={125} />
        </div>
        <div className="w-[150px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <Image src='/home/popstand.svg' alt="g2l" height={30} width={135} />
        </div>
        <div className="w-[150px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <Image src='/home/g2l.svg' alt="g2l" height={46} width={96} />
        </div>
        <div className="w-[150px] h-[100px] bg-[#262626] border border-[#3D3D3D] rounded flex items-center justify-center">
          <Image src='/home/polowear.svg' alt="g2l" height={24} width={125} />
        </div>
      </div>
      <span className="leading-6">Sou obcecado por side-projects e #BuildinPublic. Alguns projetos ainda estão ativos e outros já foram descontinuados.</span>
      <div className="flex flex-col gap-4">
        <Link href="https://orcamentosimples.vercel.app/" rel="noopener noreferrer">
          <div className="flex p-4 items-center bg-[#262626] border border-[#3D3D3D] rounded" >
            <div className="flex flex-col justify-between flex-1 gap-8">
              <h1 className="leading-6">
                Orçamentos simples
              </h1>
              <p className="leading-6">SaaS para criação e gerenciamento de orçamentos</p>
            </div>
            <FiArrowUpRight size={24} />
          </div>
        </Link>
        <Link href="https://mulesstudio.vercel.app/" rel="noopener noreferrer">
          <div className="flex p-4 items-center bg-[#262626] border border-[#3D3D3D] rounded" >
            <div className="flex flex-col justify-between flex-1 gap-8">
              <h1 className="leading-6">
                Mules Studio
              </h1>
              <p className="leading-6"> Uma comunidade NFT de Mulas na Blockchain da Fantom.</p>
            </div>
            <FiArrowUpRight size={24} />
          </div>
        </Link>
        <Link href="https://github.com/brunooomelo/picpay-js" rel="noopener noreferrer">
          <div className="flex p-4 items-center bg-[#262626] border border-[#3D3D3D] rounded" >
            <div className="flex flex-col justify-between flex-1 gap-8">
              <h1 className="leading-6">
                Picpac-js
              </h1>
              <p className="leading-6"> Uma Javascript SDK para API Rest do Picpay Ecommerce</p>
            </div>
            <FiArrowUpRight size={24} />
          </div>
        </Link>
        <Link href="https://github.com/brunooomelo/lottery" rel="noopener noreferrer">
          <div className="flex p-4 items-center bg-[#262626] border border-[#3D3D3D] rounded" >
            <div className="flex flex-col justify-between flex-1 gap-8">
              <h1 className="leading-6">
                Lottery
              </h1>
              <p className="leading-6"> CLI para receber resultados da Loteria Brasileira</p>
            </div>
            <FiArrowUpRight size={24} />
          </div>
        </Link>
      </div>
      <div className="w-full flex justify-between">
        <Link href="https://github.com/brunooomelo" rel="noopener noreferrer">
          <SiGithub size={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/brunooomelo" rel="noopener noreferrer">
          <SiLinkedin size={24} />
        </Link>
        <Link href="https://x.com/brunooomelo" rel="noopener noreferrer">
          <SiTwitter size={24} />
        </Link>
      </div>
    </>
  )
}
