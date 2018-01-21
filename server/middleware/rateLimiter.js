const RateLimiter = require('express-rate-limit')

const WINDOW_MS = 30 * 60 * 1000
const MAX_REQUESTS = 10
const SLOW_DOWN_DELAY = 0

var limiter = new RateLimiter({
  windowMs: WINDOW_MS,
  max: MAX_REQUESTS,
  delayMs: SLOW_DOWN_DELAY,
});

module.exports = limiter
