import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const PageWrap = ({ children, padded }) => (
  <main className={classnames('c-main container', padded && 'c-main--padded')}>
    { children }
  </main>
)

PageWrap.propTypes = {
  children: PropTypes.node.isRequired,
  padded: PropTypes.bool,
}

PageWrap.defaultProps = {
  padded: true,
}

export default PageWrap
