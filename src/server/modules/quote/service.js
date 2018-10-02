const sgMail = require('@sendgrid/mail')
const { sendgrid } = require('../../config')
const { isProd } = require('../../config')

const ADMIN = 'web@bbf.co.uk'
const TO = 'print@bbf.co.uk'
const FROM = 'web@bbf.co.uk'
const FROM_TEST = 'test@bbf.co.uk'

sgMail.setApiKey(sendgrid.apiKey)

const send = email =>
  sgMail.send({
    from: isProd ? FROM : FROM_TEST,
    ...email,
    to: isProd ? TO : ADMIN,
  })

const generateHtml = details =>
  `
    ${
      !isProd
        ? '<p style="font-weight:bold;">This is a test of the site messaging system, please ignore.</p>'
        : ''
    }
    <p><b>Contact:</b> ${details.name}</p>
    ${details.company ? `<p><b>Company:</b> ${details.company}</p>` : ''}
    ${
      details.tel
        ? `<p><b>Telephone:</b> <a href="tel:${details.tel}">${
            details.tel
          }</a></p>`
        : ''
    }
    <p><b>Email:</b> <a href="mailto:${details.email}">${details.email}</a></p>
    ${
      details.hearAboutUs
        ? `<p><b>Referrer:</b> ${details.hearAboutUs}</p>`
        : ''
    }
    <p><b>Message:</b></p>
    <p>${details.message}</p>

    <p><small>This is an automated message, please reply to the contact listed above.</small></p>
    <p><small>Please report any issues to <a href="mailto:${ADMIN}">${ADMIN}</a>.</small></p>
  `

const generateQuoteEmail = details =>
  new Promise(resolve =>
    resolve({
      subject: `Website Enquiry - ${details.name}${
        details.company ? ` @ ${details.company}` : ''
      }${!isProd ? ' [TEST]' : ''}`,
      html: generateHtml(details),
    }),
  )

module.exports = {
  send,
  generateQuoteEmail,
}
