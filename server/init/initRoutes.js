const health = require('../modules/health').api
const quote = require('../modules/quote').api

const initRoutes = (app) => {
  app.use(health)
  app.use(quote)
}

module.exports = initRoutes
