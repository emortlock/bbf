/**
 * Module dependencies.
 */
const http = require('http')

const app = require('./src/server')
const config = require('./src/server/config')

const logger = require('./src/server/logger')

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

const port = normalizePort(config.server.port)

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      throw new Error(`${bind} requires elevated privileges`)
    case 'EADDRINUSE':
      throw new Error(`${bind} is already in use`)
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = server => () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`
  logger.info(`Listening on ${bind}`)
}

app
  .then((server) => {
    server.set('port', port)

    /**
     * Create HTTP server.
     */

    const httpServer = http.createServer(server)

    /**
     * Listen on provided port, on all network interfaces.
     */

    httpServer.listen(port)
    httpServer.on('error', onError)
    httpServer.on('listening', onListening(httpServer))

    /**
     * Graceful shutdown
     */
    process.on('SIGTERM', () => {
      logger.info('Process terminated')

      server.close((err) => {
        if (err) {
          logger.fatal('Failed to shutdown')
          logger.debug(err)

          // eslint-disable-next-line no-process-exit
          process.exit(1)
        }

        // eslint-disable-next-line no-process-exit
        process.exit(0)
      })
    })
  })
