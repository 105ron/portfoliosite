require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Rhys',
  },
  plugins: [{
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID || '',
        accessToken: process.env.ACCESS_TOKEN || '',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`],
  pathPrefix: "/portfoliosite"
}
