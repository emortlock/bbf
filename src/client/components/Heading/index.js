import { compose, withProps } from 'recompose'

import Heading from './components/Heading'

const H1 = compose(withProps({ HeadingLevel: 'h1' }))(Heading)
const H2 = compose(withProps({ HeadingLevel: 'h2' }))(Heading)
const H3 = compose(withProps({ HeadingLevel: 'h3' }))(Heading)
const H4 = compose(withProps({ HeadingLevel: 'h4' }))(Heading)

export { H1, H2, H3, H4 }
