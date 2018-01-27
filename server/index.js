const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const compressionMiddleware = require('compression')
const validationMiddleware = require('./middleware/validation')
const loggerMiddleware = require('./middleware/logger')

const initRoutes = require('./init/initRoutes')
const initRateLimiter = require('./init/initRateLimiter')

const config = require('./config')

const app = require('./init/initApp')
const handle = app.getRequestHandler()

const rootDir = path.resolve(__dirname, '../client')
const outDir = path.join(rootDir, '.next')

module.exports = app.prepare()
  .then(() => {
    const server = express()

    if (!config.isDev) {
      server.use(compressionMiddleware())
    }

    server.use(loggerMiddleware.request)

    initRateLimiter(server)

    server.use(validationMiddleware)
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(loggerMiddleware.body)

    if (!config.isDev) {
      server.use('/_next/', express.static(outDir, {
        maxAge: "365d",
        immutable: true
      }))

      // We know generated assets are immutable so we set high max-age
      server.use('/static/assets/', express.static(path.join(outDir, '.static/assets'), {
        maxAge: "365d",
        immutable: true
      }))

      // Other assets are mutable, but we want CDNs to cache it for at least 1m
      server.use('/static/', express.static(path.join(outDir, '.static'), {
        maxAge: "1m"
      }))
    }

    initRoutes(server)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.use(loggerMiddleware.response)

    return server
  })
