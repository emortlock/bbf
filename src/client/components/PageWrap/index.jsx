import React from 'react'
import PropTypes from 'prop-types'

import { Container, Main } from 'tailwind-react-ui'

const PageWrap = ({ children, padding }) => (
  <Container>
    <Main className="c-main" p={padding ? 6 : undefined}>
      {children}
    </Main>
  </Container>
)

PageWrap.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.bool,
}

PageWrap.defaultProps = {
  padding: true,
}

export default PageWrap
