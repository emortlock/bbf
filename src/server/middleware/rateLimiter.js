const RateLimiter = require('express-rate-limit')
const logger = require('../logger')

const WINDOW_MS = 30 * 60 * 1000
const MAX_REQUESTS = 5
const SLOW_DOWN_DELAY = 0

const onLimitReached = (req) => {
  logger.info(`Rate limit reached for IP ${req.connection.remoteAddress}`)
}

var limiter = new RateLimiter({
  windowMs: WINDOW_MS,
  max: MAX_REQUESTS,
  delayMs: SLOW_DOWN_DELAY,
  message: 'Request limit exceeded',
  onLimitReached,
});

module.exports = limiter
