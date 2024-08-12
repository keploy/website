// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config({
        ignores: ["eslint.config.js"]
    },
    {
        languageOptions: {
            parserOptions: {
                // sourceType: 'module',
                project: true,
            }
        }},
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylistic,
);