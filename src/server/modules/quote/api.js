const express = require('express')
const service = require('./service')
const logger = require('../../logger')

const router = express.Router()

router.post('/quote', (req, res) => {
  const contact = req.body.email

  if (contact) {
    return service.generateQuoteEmail(req.body)
      .then((email) => {
        logger.info(`Sending quote request from ${contact.match(/.+?(?=@)/)[0]}@***.***`)
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
        logger.crit(error.message)
        res.sendStatus(500)
      })
  }
  logger.warn('Invalid request received')
  return res.sendStatus(400)
})

module.exports = router
