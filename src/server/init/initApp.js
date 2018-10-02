const next = require('next')
const config = require('../config')

module.exports = next({
  dev: config.isDev,
})
