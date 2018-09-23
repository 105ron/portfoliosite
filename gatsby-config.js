module.exports = {
  siteMetadata: {
    title: 'MadeByRhys',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'MadeByRhys',
        short_name: 'MadeByRhys',
        start_url: '/',
        background_color: "#fff",
        description: "A portfolio site, blog and projects of Rhys.",
        icon: 'src/assets/images/favicon96.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
