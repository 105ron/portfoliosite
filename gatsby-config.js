require('dotenv').config()

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
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`],
  pathPrefix: "/portfoliosite"
};
