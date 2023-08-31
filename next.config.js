const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
