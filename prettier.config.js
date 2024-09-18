/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {import('prettier-plugin-tailwindcss')} TailwindConfig */
/** @typedef {import('@ianvs/prettier-plugin-sort-imports')} SortImportsConfig */

/** @type {PrettierConfig | TailwindConfig | SortImportsConfig} */
const config = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  // Tailwind
  tailwindFunctions: ['cn', 'cva'],
  // Sort Imports
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrder: [
    '<TYPES>',
    '^(next/(.+))$',
    '^(react/(.+))$|^(react)$',
    '<THIRD_PARTY_MODULES>',
    '',
    '<TYPES>^([.|..|@]/(.*))$',
    '^@/',
    '^[../]',
    '^[./]',
  ],
}

export default config
