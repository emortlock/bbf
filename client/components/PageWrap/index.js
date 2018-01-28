import React from 'react'
import PropTypes from 'prop-types'

const PageWrap = ({ children }) => (
  <main className="container mx-auto py-4">
    { children }
  </main>
)

PageWrap.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageWrap
