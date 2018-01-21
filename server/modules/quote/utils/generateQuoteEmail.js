const generateQuoteEmail = details => (
  new Promise(resolve =>
    resolve({
      content: generateHtml(details),
      subject: `Request for Quote - ${details.name}`
    })
  )
)

const generateHtml = details => (
  `
    <div>
      <h1>Request for Quote Received.</h1>
      <h3>Company: ${details.name}</h3>
      <h3>Email: ${details.email}</h3>
    </div>
  `
)

module.exports = generateQuoteEmail
