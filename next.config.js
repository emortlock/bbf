const withCSS = require('@zeit/next-css')
const withMdxc = require('@zeit/next-mdxc')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const {
  getWhitelist,
  TailwindReactExtractor,
} = require('tailwind-react-ui/tools')

const path = require('path')
const glob = require('glob-all')

const PurgecssPlugin = require('purgecss-webpack-plugin')

// Custom PurgeCSS extractor for Tailwind that allows special characters in class names.
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = (phase, { defaultConfig }) =>
  withBundleAnalyzer(
    withCSS(
      withMdxc({
        ...defaultConfig,
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeClient: ['client', 'both'].includes(process.env.BUNDLE_ANALYZE),
        webpack: (config, { dev, isServer }) => {
          const newConfig = Object.assign({}, config)
          const originalEntry = config.entry

          newConfig.entry = async () => {
            const entries = await originalEntry()

            if (entries['main.js']) {
              entries['main.js'].unshift('@babel/polyfill')
            }

            return entries
          }

          newConfig.resolve.extensions = ['.js', '.jsx']

          if (!dev && !isServer) {
            newConfig.plugins.push(
              new PurgecssPlugin({
                whitelist: getWhitelist(
                  {
                    brandColors: {
                      primary: 'teal',
                      secondary: 'white',
                      info: 'yellow',
                    },
                    textColors: {
                      on: {
                        primary: 'white',
                        secondary: 'black',
                        info: 'black',
                      },
                    },
                  },
                  [
                    'html',
                    'body',
                    'c-heading--divider-white',
                    'md:w-auto',
                    'md:pin-t',
                    'md:pin-r',
                    'px-8',
                    'p-6',
                  ],
                ),
                whitelistPatterns: [/-[0-9]\/[0-9]$/],
                paths: glob.sync([
                  path.join(__dirname, '/src/client/**/*.js'),
                  path.join(__dirname, '/src/client/**/*.jsx'),
                ]),
                extractors: [
                  {
                    extractor: TailwindReactExtractor,
                    extensions: ['jsx'],
                  },
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
        exportPathMap() {
          return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/contact': { page: '/contact' },
            '/guarantee': { page: '/guarantee' },
            '/products': { page: '/products' },
            '/products/business-stationery': {
              page: '/products/business-stationery',
            },
            '/products/continuous-stationery': {
              page: '/products/continuous-stationery',
            },
            '/products/digital-printing': {
              page: '/products/digital-printing',
            },
            '/products/envelopes': { page: '/products/envelopes' },
            '/products/laser-sheets': { page: '/products/laser-sheets' },
            '/products/miscellaneous': { page: '/products/miscellaneous' },
            '/products/one-piece-mailers': {
              page: '/products/one-piece-mailers',
            },
            '/products/pads-sets-books': { page: '/products/pads-sets-books' },
            '/products/personalisation': { page: '/products/personalisation' },
            '/products/plastic-products': {
              page: '/products/plastic-products',
            },
            '/products/promotional-gifts': {
              page: '/products/promotional-gifts',
            },
            '/products/promotional-print': {
              page: '/products/promotional-print',
            },
            '/products/security-products': {
              page: '/products/security-products',
            },
            '/products/self-adhesive-products': {
              page: '/products/self-adhesive-products',
            },
            '/products/special-products': {
              page: '/products/special-products',
            },
          }
        },
      }),
    ),
  )
