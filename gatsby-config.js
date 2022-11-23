module.exports = {
  siteMetadata: {
    title: "VINUMAR",
    description: 'Página oficial de VINUMAR',
    siteUrl: 'http://www.vinumar.com'
  },
  plugins: [`gatsby-plugin-sitemap`, `gatsby-theme-material-ui`, `gatsby-plugin-material-ui`, 'gatsby-plugin-react-helmet', {
    resolve: `gatsby-plugin-preload`,
    options: {
      preloaders: [
        {
          href: "/src/styles/pages/mediaQueries/mediaAll.css",
          as: "style"
        }
      ]
    }
  },
  // {
  //   resolve: `gatsby-plugin-google-gtag`,
  //   options: {
  //     trackingIds: [
  //       "G-7S5GWG9HHF",
  //       "GTM-N84V5XM"
  //     ]
  //   }
  // },
  {
    resolve: `gatsby-plugin-gdpr-cookies`,
    options: {
      googleAnalytics: {
        trackingId: 'G-7S5GWG9HHF',
        anonymize: true,
        cookieName: 'gatsby-gdpr'
      },
      googleTagManager: {
        trackingId: 'GTM-N84V5XM',
        anonymize: true,
        cookieName: 'gatsby-gdpr'
      }
    }
  }
],
};
