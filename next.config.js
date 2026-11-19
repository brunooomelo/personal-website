const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Português na raiz e inglês em /en. Sem detecção automática: o visitante
  // escolhe pelo seletor do header e nunca é redirecionado sem pedir.
  i18n: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
