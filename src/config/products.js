import BusinessStationery from '../client/content/business-stationery.mdx'
import ContinuousStationery from '../client/content/continuous-stationery.mdx'
import DigitalPrinting from '../client/content/digital-printing.mdx'
import Envelopes from '../client/content/envelopes.mdx'
import LaserSheets from '../client/content/laser-sheets.mdx'
import Miscellaneous from '../client/content/miscellaneous.mdx'
import OnePieceMailers from '../client/content/one-piece-mailers.mdx'
import PadsSetsBooks from '../client/content/pads-sets-books.mdx'
import Personalisation from '../client/content/personalisation.mdx'
import PlasticProducts from '../client/content/plastic-products.mdx'
import PromotionalGifts from '../client/content/promotional-gifts.mdx'
import PromotionalPrint from '../client/content/promotional-print.mdx'
import SecurityProducts from '../client/content/security-products.mdx'
import SelfAdhesiveProducts from '../client/content/self-adhesive-products.mdx'
import SpecialProducts from '../client/content/special-products.mdx'

const products = {
  businessStationery: {
    order: 1,
    path: '/business-stationery',
    name: 'Business Stationery',
    Content: BusinessStationery,
    image: { src: '/static/images/products/business-stationery.png', alt: 'Business cards' },
    tags: ['Letterheadings', 'Continuation Sheets', 'Compliment Slips', 'Business Cards'],
  },
  continuousStationery: {
    order: 3,
    path: '/continuous-stationery',
    name: 'Continuous Stationery',
    Content: ContinuousStationery,
    image: { src: '/static/images/products/continuous-stationery.png', alt: 'Continuous payslip' },
    tags: ['Invoices', 'Credit Notes', 'Delivery Notes', 'Picking Notes', 'Statements', 'Remittance Advices', 'Purchase Orders', 'Payslips', 'Order Acknowledgements', 'Letterheadings', 'Job Cards', 'Cheques'],
  },
  digitalPrinting: {
    order: 7,
    path: '/digital-printing',
    name: 'Digital Printing',
    Content: DigitalPrinting,
    image: { src: '/static/images/products/digital-printing.png', alt: 'Colour swatch' },
    tags: ['Business Cards', 'Letterheadings', 'Compliment Slips', '4 Colour Process', 'Promotional Leaflets', 'Vouchers', 'Product Information', 'Leaflets', 'Mousemats', 'Posters', 'Promotional Items'],
  },
  envelopes: {
    order: 8,
    path: '/envelopes',
    name: 'Envelopes',
    Content: Envelopes,
    image: { src: '/static/images/products/envelopes.png', alt: 'Envelopes' },
    tags: ['Gummed or Self Seal', 'Plain or with a Window', 'Wallet or Pocket', 'White/Manilla', 'Light/Heavy Weight'],
  },
  laserSheets: {
    order: 2,
    path: '/laser-sheets',
    name: 'Laser Sheets',
    Content: LaserSheets,
    image: { src: '/static/images/products/laser-sheets.png', alt: 'Laser printer with coloured charts printed out' },
    tags: ['Invoices', 'Statements', 'Delivery Notes', 'Purchase Orders', 'Job Cards', 'Cheques'],
  },
  miscellaneous: {
    order: 14,
    path: '/miscellaneous',
    name: 'Miscellaneous',
    Content: Miscellaneous,
    image: { src: '/static/images/products/miscellaneous.png', alt: 'Business cards with question marks printed on' },
    tags: ['Tags', 'Promotional Pop-Ups', 'Binding Methods', 'Cutting and Creasing', 'Large Format Print'],
  },
  onePieceMailers: {
    order: 10,
    path: '/one-piece-mailers',
    name: 'One Piece Mailers',
    Content: OnePieceMailers,
    image: { src: '/static/images/products/one-piece-mailers.png', alt: 'Postbox' },
    tags: ['Invoices', 'Statements', 'Pay Advices', 'Promotional Mailshots'],
  },
  padsSetsBooks: {
    order: 4,
    path: '/pads-sets-books',
    name: 'Pads, Sets & Books',
    Content: PadsSetsBooks,
    image: { src: '/static/images/products/pads-sets-books.png', alt: 'Notepad' },
    tags: ['Invoices', 'Credit Notes', 'Delivery Notes', 'Engineering Report Pads', 'Purchase Orders', 'Enquiry/Order Pads', 'Credit Applications', 'Promotional Pads', 'Collection/Return Pads', 'Restaurant Bills', 'Cheques', 'Stocktaking Tickets', 'Quality/Job Sheets'],
  },
  personalisation: {
    order: 13,
    path: '/personalisation',
    name: 'Personalisation',
    Content: Personalisation,
    image: { src: '/static/images/products/personalisation.png', alt: 'Person typing on a keyboard' },
    tags: ['Invoices', 'Statements', 'Mailshots', 'Promotional Literature', 'Reminders'],
  },
  plasticProducts: {
    order: 12,
    path: '/plastic-products',
    name: 'Plastic Products',
    Content: PlasticProducts,
    image: { src: '/static/images/products/plastic-products.png', alt: 'Ring binder' },
    tags: ['Index Dividers', 'Key Fobs', 'Mousemats', 'Coasters', 'Business Cards', 'Membership Cards', 'Security Passes'],
  },
  promotionalGifts: {
    order: 15,
    // path: 'http://bbfpromotionalgifts.co.uk',
    path: '/promotional-gifts',
    name: 'Promotional Gifts',
    Content: PromotionalGifts,
    image: { src: '/static/images/products/promotional-gifts.png', alt: 'Calendar' },
    tags: ['Mugs', 'Pens', 'Bags', 'Keyrings'],
  },
  promotionalPrint: {
    order: 6,
    path: '/promotional-print',
    name: 'Promotional Print',
    Content: PromotionalPrint,
    image: { src: '/static/images/products/promotional-print.png', alt: 'Pile of magazines' },
    tags: ['Product Leaflets', 'Product Brochures', 'Promotional Flyers', 'Letterheadings', 'Business Cards', 'Promotional Folders', 'Block Pads', 'Jotter Pads'],
  },
  securityProducts: {
    order: 5,
    path: '/security-products',
    name: 'Security Products',
    Content: SecurityProducts,
    image: { src: '/static/images/products/security-products.png', alt: 'Cheque book' },
    tags: ['Parking Permits', 'Membership Cards', 'Security Cards', 'Cheques', 'Vouchers', 'Pay Advices'],
  },
  selfAdhesiveProducts: {
    order: 9,
    path: '/self-adhesive-products',
    name: 'Self Adhesive Products',
    Content: SelfAdhesiveProducts,
    image: { src: '/static/images/products/self-adhesive-products.png', alt: 'Peelable labels on a continuous sheet' },
    tags: ['Address Labels', 'Packaging Labels', 'Chemical Warning Labels', 'Portable Appliance', 'Labels', 'Laser and Impact', 'Print Labels', 'Copier Labels'],
  },
  specialProducts: {
    order: 11,
    path: '/special-products',
    name: 'Special Products',
    Content: SpecialProducts,
    image: { src: '/static/images/products/special-products.png', alt: 'Security pass on a lanyard' },
    tags: ['Integral Pop Out Cards', 'Photo Cards', 'Integral Labels', 'Window Stickers', 'Integral Fridge Magnets', 'Visitor Passes', 'Parking Permits', 'Bus Passes', 'Return Labels', 'Address Labels'],
  },
}

const getById = product => products[product]

export { getById }

export default Object.keys(products).map(key => ({
  key,
  ...products[key],
}))
