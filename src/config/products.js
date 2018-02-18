import businessStationery from '../client/assets/images/products/business-stationery.png'
import continuousStationery from '../client/assets/images/products/continuous-stationery.png'
import digitalPrinting from '../client/assets/images/products/digital-printing.png'
import envelopes from '../client/assets/images/products/envelopes.png'
import laserSheets from '../client/assets/images/products/laser-sheets.png'
import miscellaneous from '../client/assets/images/products/miscellaneous.png'
import onePieceMailers from '../client/assets/images/products/one-piece-mailers.png'
import padsSetsBooks from '../client/assets/images/products/pads-sets-books.png'
import personalisation from '../client/assets/images/products/personalisation.png'
import plasticProducts from '../client/assets/images/products/plastic-products.png'
import promotionalPrint from '../client/assets/images/products/promotional-print.png'
import promotionalGifts from '../client/assets/images/products/promotional-gifts.png'
import securityProducts from '../client/assets/images/products/security-products.png'
import selfAdhesiveProducts from '../client/assets/images/products/self-adhesive-products.png'
import specialProducts from '../client/assets/images/products/special-products.png'

const products = {
  businessStationery: {
    order: 1,
    path: '/business-stationery',
    name: 'Business Stationery',
    image: { src: businessStationery, alt: 'Business cards' },
    tags: ['Letterheadings', 'Continuation Sheets', 'Compliment Slips', 'Business Cards'],
  },
  continuousStationery: {
    order: 3,
    path: '/continuous-stationery',
    name: 'Continuous Stationery',
    image: { src: continuousStationery, alt: 'Continuous payslip' },
    tags: ['Invoices', 'Credit Notes', 'Delivery Notes', 'Picking Notes', 'Statements', 'Remittance Advices', 'Purchase Orders', 'Payslips', 'Order Acknowledgements', 'Letterheadings', 'Job Cards', 'Cheques'],
  },
  digitalPrinting: {
    order: 7,
    path: '/digital-printing',
    name: 'Digital Printing',
    image: { src: digitalPrinting, alt: 'Colour swatch' },
    tags: ['Business Cards', 'Letterheadings', 'Compliment Slips', '4 Colour Process', 'Promotional Leaflets', 'Vouchers', 'Product Information', 'Leaflets', 'Mousemats', 'Posters', 'Promotional Items'],
  },
  envelopes: {
    order: 8,
    path: '/envelopes',
    name: 'Envelopes',
    image: { src: envelopes, alt: 'Envelopes' },
    tags: ['Gummed or Self Seal', 'Plain or with a Window', 'Wallet or Pocket', 'White/Manilla', 'Light/Heavy Weight'],
  },
  laserSheets: {
    order: 2,
    path: '/laser-sheets',
    name: 'Laser Sheets',
    image: { src: laserSheets, alt: 'Laser printer with coloured charts printed out' },
    tags: ['Invoices', 'Statements', 'Delivery Notes', 'Purchase Orders', 'Job Cards', 'Cheques'],
  },
  miscellaneous: {
    order: 14,
    path: '/miscellaneous',
    name: 'Miscellaneous',
    image: { src: miscellaneous, alt: 'Business cards with question marks printed on' },
    tags: ['Tags', 'Promotional Pop-Ups', 'Binding Methods', 'Cutting and Creasing', 'Large Format Print'],
  },
  onePieceMailers: {
    order: 10,
    path: '/one-piece-mailers',
    name: 'One Piece Mailers',
    image: { src: onePieceMailers, alt: 'Postbox' },
    tags: ['Invoices', 'Statements', 'Pay Advices', 'Promotional Mailshots'],
  },
  padsSetsBooks: {
    order: 4,
    path: '/pads-sets-books',
    name: 'Pads, Sets & Books',
    image: { src: padsSetsBooks, alt: 'Notepad' },
    tags: ['Invoices', 'Credit Notes', 'Delivery Notes', 'Engineering Report Pads', 'Purchase Orders', 'Enquiry/Order Pads', 'Credit Applications', 'Promotional Pads', 'Collection/Return Pads', 'Restaurant Bills', 'Cheques', 'Stocktaking Tickets', 'Quality/Job Sheets'],
  },
  personalisation: {
    order: 13,
    path: '/personalisation',
    name: 'Personalisation',
    image: { src: personalisation, alt: 'Person typing on a keyboard' },
    tags: ['Invoices', 'Statements', 'Mailshots', 'Promotional Literature', 'Reminders'],
  },
  plasticProducts: {
    order: 12,
    path: '/plastic-products',
    name: 'Plastic Products',
    image: { src: plasticProducts, alt: 'Ring binder' },
    tags: ['Index Dividers', 'Key Fobs', 'Mousemats', 'Coasters', 'Business Cards', 'Membership Cards', 'Security Passes'],
  },
  promotionalGifts: {
    order: 15,
    path: 'http://bbfpromotionalgifts.co.uk',
    name: 'Promotional Gifts',
    image: { src: promotionalGifts, alt: 'Calendar' },
    tags: ['Mugs', 'Pens', 'Bags', 'Keyrings'],
  },
  promotionalPrint: {
    order: 6,
    path: '/promotional-print',
    name: 'Promotional Print',
    image: { src: promotionalPrint, alt: 'Pile of magazines' },
    tags: ['Product Leaflets', 'Product Brochures', 'Promotional Flyers', 'Letterheadings', 'Business Cards', 'Promotional Folders', 'Block Pads', 'Jotter Pads'],
  },
  securityProducts: {
    order: 5,
    path: '/security-products',
    name: 'Security Products',
    image: { src: securityProducts, alt: 'Cheque book' },
    tags: ['Parking Permits', 'Membership Cards', 'Security Cards', 'Cheques', 'Vouchers', 'Pay Advices'],
  },
  selfAdhesiveProducts: {
    order: 9,
    path: '/self-adhesive-products',
    name: 'Self Adhesive Products',
    image: { src: selfAdhesiveProducts, alt: 'Peelable labels on a continuous sheet' },
    tags: ['Address Labels', 'Packaging Labels', 'Chemical Warning Labels', 'Portable Appliance', 'Labels', 'Laser and Impact', 'Print Labels', 'Copier Labels'],
  },
  specialProducts: {
    order: 11,
    path: '/special-products',
    name: 'Special Products',
    image: { src: specialProducts, alt: 'Security pass on a lanyard' },
    tags: ['Integral Pop Out Cards', 'Photo Cards', 'Integral Labels', 'Window Stickers', 'Integral Fridge Magnets', 'Visitor Passes', 'Parking Permits', 'Bus Passes', 'Return Labels', 'Address Labels'],
  },
}

const getById = product => products[product]

export { getById }

export default Object.keys(products).map(key => ({
  key,
  ...products[key],
}))
