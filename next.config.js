/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/it/course": {
        page: "/[lang]/course",
        //query: { lang: "it", active: null },
      },
      "/en/course": {
        page: "/[lang]/course",
        //query: { lang: "en", active: null },
      },
      "/it/home": {
        page: "/[lang]/home",
        //query: { lang: "it", active: null },
      },
      "/en/home": {
        page: "/[lang]/home",
        //query: { lang: "en", active: null },
      },
      "/it/minds": {
        page: "/[lang]/minds",
        //query: { lang: "it", active: null },
      },
      "/en/minds": {
        page: "/[lang]/minds",
        //query: { lang: "en", active: null },
      },

      "/it/teachings": {
        page: "/[lang]/teachings",
        //query: { lang: "it", active: null },
      },
      "/en/teachings": {
        page: "/[lang]/teachings",
        //query: { lang: "en", active: null },
      },
      "/it/thesis": {
        page: "/[lang]/thesis",
        //query: { lang: "it", active: null },
      },
      "/en/thesis": {
        page: "/[lang]/thesis",
        //query: { lang: "en", active: null },
      },
    };
  },
};
