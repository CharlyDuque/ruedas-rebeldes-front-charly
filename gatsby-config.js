const autoprefixer = require("autoprefixer")
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.GATSBY_LOCAL_ENV || process.env.NODE_ENV

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

if (activeEnv === "production") {
}

let gatsbyPlugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-smoothscroll`,
  `gatsby-plugin-no-sourcemaps`,
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      lang: "es-MX",
      icon: `${__dirname}/static/metas/ruedas-icon.svg`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      name: `ruedas-rebeldes`,
      short_name: `ruedas-rebeldes`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `static`,
      path: `${__dirname}/static/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `metas`,
      path: `${__dirname}/static/metas`,
    },
  },
  {
    resolve: "gatsby-plugin-sass",
    options: {
      postCssPlugins: [autoprefixer()],
      sassOptions: {
        includePaths: [`src/styles`],
        precision: 8,
      },
    },
  },
  {
    resolve: "gatsby-plugin-robots-txt",
    options: {
      env: {
        development: {
          policy: [{ userAgent: "*", disallow: ["/"] }],
        },
        production: {
          policy: [{ userAgent: "*", allow: "/" }],
        },
      },
    },
  },
]

module.exports = {
  siteMetadata: {
    title: `Sitio Oficial de Ruedas Rebeldes`,
    titleTemplate: "%s",
    description: `Ruedas Rebeldes`,
    siteUrl: `${process.env.SITE_URL}`,
    url: `${process.env.SITE_URL}`,
    image: `${process.env.SITE_URL}/assets/images/common/ruedas-site-img.png`,
    author: `@RuedasRebeldes`,
  },
  plugins: gatsbyPlugins,
}
