const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf'
	],
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: require('svelte-preprocess')()
	},
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			$lib: path.resolve(__dirname, '../src/lib')
		};
		return config;
	}
};
