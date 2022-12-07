import path from 'path';

export default [
	{
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
			path: `${__dirname}/src/pages`,
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
			plugins: [
				{
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
				`gatsby-remark-graphviz`,
				{
					resolve: `gatsby-remark-prismjs`,
					options: {
						classPrefix: 'language-',
						showLineNumbers: true,
					},
				},
				`gatsby-remark-copy-linked-files`,
				// `gatsby-remark-smartypants`,
			],
		},
	},
	// {
	// 	resolve: `gatsby-plugin-manifest`,
	// 	// options: {
	// 	// 	name: `Gatsby Blog`,
	// 	// 	short_name: `GatsbyJS`,
	// 	// 	start_url: `/`,
	// 	// 	background_color: `linear-gradient(to right, #4facfe 0%, #00f2fe 100%)`,
	// 	// 	theme_color: `#a2466c`,
	// 	// 	display: `minimal-ui`,
	// 	// 	crossOrigin: `use-credentials`,
	// 	// 	icon: `https://avatars3.githubusercontent.com/u/16014141?s=400&u=e432731469909d98b2e5ed969e7f80743c49c046&v=4`,
	// 	// },
	// },
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
				'@': path.resolve(__dirname, 'src'),
			},
		},
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
	{
		resolve: `gatsby-plugin-styled-components`,
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
