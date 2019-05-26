module.exports = [{
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content`,
      name: `blogs`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [{
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          classPrefix: "language-",
          showLineNumbers: false,
        },
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-antd',
    options: {
      style: 'css'
    }
  },
  {
    resolve: 'gatsby-plugin-import',
    options: {
      libraryName: "antd",
      style: 'css',
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Gatsby Blog`,
      short_name: `GatsbyJS`,
      start_url: `/`,
      background_color: `linear-gradient(to right, #4facfe 0%, #00f2fe 100%)`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `content/assets/gatsby-icon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: `tomato`,
      showSpinner: true,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
];