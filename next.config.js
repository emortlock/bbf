const path = require('path')
const glob = require('glob-all')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssColorFunction = require('postcss-color-function')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const syntax = require('postcss-scss')
const tailwind = require('tailwindcss')

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = {
  webpack: (config, { buildId, dev }) => {
    const newConfig = Object.assign({}, config)

    const cssLoader = ['babel-loader']

    if (dev) {
      cssLoader.push('raw-loader')
    } else {
      cssLoader.push(
        {
          loader: 'css-loader',
          options: {
            url: true,
            sourceMap: dev,
            importLoaders: 1,
          },
        },
      )
    }

    cssLoader.push({
      loader: 'postcss-loader',
      options: {
        syntax,
        plugins: [
          postcssImport(),
          postcssNested(),
          tailwind(path.join(__dirname, 'src', 'client', 'styles', 'tailwind.config.js')),
          postcssColorFunction(),
          autoprefixer(),
          cssnano(),
        ],
      },
    })

    newConfig.module.rules.push(
      {
        test: /\.((sa|sc|c)ss|jpg|png)$/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '.static/assets/[hash].[ext]',
              outputPath: dev ? path.join(__dirname, '/') : undefined,
              publicPath(url) {
                return url.replace(/^.*.static/, '/static')
              },
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: dev
          ? cssLoader
          : ['extracted-loader'].concat(ExtractTextPlugin.extract({ use: cssLoader })),
      },
    )

    if (!dev) {
      newConfig.plugins.push(
        new ExtractTextPlugin({
          filename: dev
            ? path.join(__dirname, '.static/assets/bundle.css')
            : `.static/assets/${buildId}.css`,
          allChunks: true,
        }),
        new PurgecssPlugin({
          paths: glob.sync([
            path.join(__dirname, '/**/*.js'),
          ]),
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ['html', 'js', 'jsx'],
            },
          ],
        }),
      )
    }

    return newConfig
  },
}
