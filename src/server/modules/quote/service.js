const sgMail = require('@sendgrid/mail')
const { sendgrid } = require('../../config')

const TO = 'ed@bbf.co.uk'
const FROM = 'test@example.co.uk'

sgMail.setApiKey(sendgrid.apiKey)

const send = (email) =>
  sgMail.send({
    from: FROM,
    ...email,
    to: TO,
  })

const generateHtml = details => (
  `
    <div>
      <h1>Request for Quote Received.</h1>
      <h3>Company: ${details.name}</h3>
      <h3>Email: ${details.to}</h3>
    </div>
  `
)

const generateQuoteEmail = details => (
  new Promise(resolve =>
    resolve({
      subject: `Request for Quote - ${details.name}`,
      to: details.to,
      html: generateHtml(details),
    })
  )
)

module.exports = {
  send,
  generateQuoteEmail,
}
