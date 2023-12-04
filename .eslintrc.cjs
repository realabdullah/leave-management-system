module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
	plugins: [],
	rules: {},
	overrides: [
		{
			files: ["*.vue"],
			rules: {
				"vue/no-multiple-template-root": "off",
				"vue/no-setup-props-destructure": "off",
				"vue/multi-word-component-names": "off",
				"vue/require-default-prop": "off",
			},
		},
	],
};
