const health = require('../modules/health').api
const quote = require('../modules/quote').api
const staticRedirect = require('../modules/staticRedirect').api

const initRoutes = (app) => {
  app.use(health)
  app.use(quote)
  app.use(staticRedirect)
}

module.exports = initRoutes
