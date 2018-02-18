const path = require('path')

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssColorFunction = require('postcss-color-function')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const syntax = require('postcss-scss')
const tailwind = require('tailwindcss')

module.exports = {
  syntax,
  plugins: [
    postcssImport(),
    postcssNested(),
    tailwind(path.join(__dirname, 'src', 'client', 'styles', 'tailwind.config.js')),
    postcssColorFunction(),
    autoprefixer(),
    cssnano(),
  ],
}
