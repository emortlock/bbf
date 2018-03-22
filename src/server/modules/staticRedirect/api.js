const express = require('express')
const path = require('path')

const router = express.Router()

const rootStaticFiles = [
  'favicon.ico',
  'google6428c59c20f150ae.html',
  'robots.txt',
  'sitemap.xml',
]

const options = {
  root: path.join(__dirname, '../../../../', '/static'),
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  }
};

rootStaticFiles.forEach((file) => {
  router.get(`/${file}`, (req, res) => {
    res.sendFile(file, options)
  })
})

module.exports = router
