const withCSS = require('@zeit/next-css')
const withMdxc = require('@zeit/next-mdxc')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

const path = require('path')
const glob = require('glob-all')

const PurgecssPlugin = require('purgecss-webpack-plugin')

// Custom PurgeCSS extractor for Tailwind that allows special characters in class names.
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = withBundleAnalyzer(withCSS(withMdxc({
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeClient: ['client', 'both'].includes(process.env.BUNDLE_ANALYZE),
  webpack: (config, { dev, isServer }) => {
    const newConfig = Object.assign({}, config)

    newConfig.resolve.extensions = ['.js', '.jsx']

    if (!dev && !isServer) {
      newConfig.plugins.push(
        new PurgecssPlugin({
          whitelist: ['html', 'body', 'c-heading--divider-white'],
          paths: glob.sync([
            path.join(__dirname, '/src/client/**/*.js'),
            path.join(__dirname, '/src/client/**/*.jsx'),
          ]),
          extractors: [{
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'jsx'],
          }],
        }),
      )
    }

    return newConfig
  },
})))
