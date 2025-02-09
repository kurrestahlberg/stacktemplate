/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

const config = {
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindConfig: './tailwind.config.ts',
    tailwindStylesheet: './src/styles/globals.css',
    semi: false,
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    trailingComma: 'all',
}

export default config
