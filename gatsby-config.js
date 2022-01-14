require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Meus Escritos`,
    description: `Site feito para que qualquer pessoa possa publicar suas obras.`,
    author: `@teufel8`,
    siteUrl: `https://www.meusescritos.com.br/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#bbb`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_PUBLIC_FIREBASE_API_KEY,
          authDomain: `${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}firebaseapp.com`,
          databaseURL: `https://${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
          projectId: process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID,
          storageBucket: `${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
          appId: "1:1018889555488:web:3b05a9536c2313cff3f645",
          measurementId: "G-ZK5M6Z7TCH",
        },
      },
    },
  ],
};
