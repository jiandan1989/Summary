const path = require('path');

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
      name: `pages`,
      path: `${__dirname}/src/pages/`,
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
        // {
        //   resolve: "gatsby-remark-component",
        //   options: { components: ["use-state", "other-component"] }
        // },
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
      theme_color: `#a2466c`,
      display: `minimal-ui`,
      crossOrigin: `use-credentials`,
      icon: `content/assets/gatsby-icon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: `tomato`,
      showSpinner: false,
    },
  },
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        "@": path.resolve(__dirname, 'src'),
      },
    }
  },
  {
    resolve: "gatsby-plugin-ts-loader",
    options: {
      tslint: true // false or exclude to disable tslint
    }
  },
  // {
  //   resolve: `gatsby-plugin-typescript`,
  //   // options: {
  //   //   isTSX: false, // defaults to false
  //   //   // jsxPragma: `jsx`, // defaults to "React"
  //   //   allExtensions: true, // defaults to false
  //   // },
  // },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-less`,
    options: {
      cssLoaderOptions: {
        camelCase: false,
      },
    },
  },
  // { 
  //   resolve: `gatsby-plugin-purgecss`,
  //   options: {
  //     printRejected: true, // Print removed selectors and processed file names
  //     // develop: true, // Enable while using `gatsby develop`
  //     // tailwind: true, // Enable tailwindcss support
  //     // whitelist: ['whitelist'], // Don't remove this selector
  //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
  //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
  //   }
  // }
];