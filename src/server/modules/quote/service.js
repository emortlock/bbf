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
    ${details.company ? `<p><b>Company:</b> ${details.company}</p>` : ''}
    <p><b>Contact:</b> ${details.name}</p>
    ${details.tel ? `<p><b>Telephone:</b> ${details.tel}</p>` : ''}
    <p><b>Email:</b> ${details.email}</p>
    ${details.hearAboutUs ? `<p><b>Referrer:</b> ${details.hearAboutUs}</p>` : ''}
    <p><b>Message:</b></p>
    <p>${details.message}</p>
    </div>
  `
)

const generateQuoteEmail = details => (
  new Promise(resolve =>
    resolve({
      subject: `Website Enquiry - ${details.name}${details.company ? ` @ ${details.company}` : ''}`,
      html: generateHtml(details),
    })
  )
)

module.exports = {
  send,
  generateQuoteEmail,
}
