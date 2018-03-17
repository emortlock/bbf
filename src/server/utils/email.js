const sendgrid = require('@sendgrid/mail')

const SENDGRID_API_KEY = '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'
const TO = 'christopherpiercecooney@gmail.com'
const FROM = 'test@bff.co.uk'

sendgrid.setApiKey(SENDGRID_API_KEY)

module.exports = {
  send: (content, subject) => (
    sendgrid.send({
      to: TO,
      from: FROM,
      subject,
      html: content
    })
  )
}
