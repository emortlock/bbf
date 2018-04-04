const health = require('../modules/health').api
const quote = require('../modules/quote').api
const staticRedirect = require('../modules/staticRedirect').api

const initRoutes = (app) => {
  app.use(staticRedirect)
  app.use('/api', health)
  app.use('/api', quote)
}

module.exports = initRoutes
