const express = require('express')
const router = express.Router()

const email = require('./../../utils/email')
const generateQuoteEmail = require('./utils/generateQuoteEmail')

router.post('/quote', (req, res) => {
  generateQuoteEmail(req.body)
    .then(({subject, content}) => email.send(content, subject))
    .then(() => res.sendStatus(200))
    .catch(err => {
      if(err.limitExceeded) res.sendStatus(429)
      else throw(err)
    })
    .catch(() => res.sendStatus(500))
})

module.exports = router
