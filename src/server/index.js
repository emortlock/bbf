const express = require('express')
const bodyParser = require('body-parser')

const compressionMiddleware = require('compression')
const validationMiddleware = require('./middleware/validation')
const loggerMiddleware = require('./middleware/logger')

const initRoutes = require('./init/initRoutes')
const initRateLimiter = require('./init/initRateLimiter')

const config = require('./config')

const app = require('./init/initApp')

const handle = app.getRequestHandler()

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

    initRoutes(server)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.use(loggerMiddleware.response)

    return server
  })
