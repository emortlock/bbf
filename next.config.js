const withCSS = require('@zeit/next-css')

const path = require('path')
const glob = require('glob-all')

const PurgecssPlugin = require('purgecss-webpack-plugin')

// Custom PurgeCSS extractor for Tailwind that allows special characters in class names.
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = withCSS({
  webpack: (config, { dev, isServer }) => {
    const newConfig = Object.assign({}, config)

    newConfig.resolve.extensions = ['.js', '.jsx']

    if (!dev && !isServer) {
      newConfig.plugins.push(
        new PurgecssPlugin({
          paths: glob.sync([
            path.join(__dirname, '/src/client/**/*.js'),
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
})
