module.exports = {
  siteMetadata: {
    title: 'Kelli Frazier',
    // author: 'Hunter Chang',
    // description: 'A Gatsby.js V2 Starter based on Dimension by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/kf-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-167127446-1",
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-theme-ui"
  ],
}
