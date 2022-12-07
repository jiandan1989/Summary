// https://prettier.io/docs/en/options.html
module.exports = {
	trailingComma: 'all',
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	printWidth: 120,
	useTabs: true,
	proseWrap: 'never',
	jsxSingleQuote: false,
	bracketSpacing: true,
	overrides: [
		{
			files: '*.md',
			options: {
				proseWrap: 'preserve',
			},
		},
	],
};
