const baseDescription =
  'At BBF we specialise in a wide variety of printed stationery and branded merchandise.'

// ~300 characters: https://moz.com/blog/how-long-should-your-meta-description-be-2018
const setDescription = pageDescription =>
  `${baseDescription} ${pageDescription}`

// ~55 characters: https://moz.com/blog/title-tag-hacks-whiteboard-friday
const setTitle = title => title

const description = setDescription(
  'Our services include invoices, business cards and brochures as well as promotional gifts and ' +
    'workwear shipped across the UK. Get in touch with us for a tailored quote.',
)

const title = setTitle('Call BBF for all your printing & branded gifts needs')

export { description, title, setDescription }
