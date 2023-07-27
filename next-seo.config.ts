import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://brunooomelo.vercel.app',
    siteName: 'Bruno Melo Personal Website',
    description: 'Sou desenvolvedor Fullstack na Stack JS, atualmente construindo SaaS e MicroSaaS',
    images: [{
      url: 'https://brunooomelo.vercel.app/home/cover.png',
      width: 1280,
      height: 720,
      alt: 'Bruno Melo Personal Website'
    }]
  },
  twitter: {
    handle: '@brunooomelo',
    site: '@brunooomelo',
    cardType: 'summary_large_image',
  },
};

export default config;
