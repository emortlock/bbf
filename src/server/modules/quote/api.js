const express = require('express')
const service = require('./service')
const logger = require('../../logger')

const router = express.Router()

router.post('/quote', (req, res) => {

  if (req.body.to) {
    return service.generateQuoteEmail(req.body)
      .then((email) => {
        logger.info(`Sending email to ${req.body.to.match(/.+?(?=@)/)[0]}@***.***`)
        return service.send(email)
      })
      .then(() => {
        logger.info('Email sent')
        res.sendStatus(200)
      })
      .catch((error) => {
        if (error.limitExceeded) {
          logger.warn('Rate limit reacted')
          res.sendStatus(429)
        }
        else throw(error)
      })
      .catch((error) => {
        logger.crit(JSON.stringify(error, null, 1))
        res.sendStatus(500)
      })
  }
  return res.sendStatus(400)
})

module.exports = router
