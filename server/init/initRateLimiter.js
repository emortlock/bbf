const rateLimiter = require('../middleware/rateLimiter')

const initRateLimiter = (app) => {
  app.use('/quote', rateLimiter)
}

module.exports = initRateLimiter
