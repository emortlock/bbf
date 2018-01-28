import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import Header from '../Header'

const Layout = ({ children, stickyHeader }) => (
  <div>
    <Head>
      <title key="title">Berkeley Business Forms Ltd</title>
    </Head>
    <Header sticky={stickyHeader} />
    { children }
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  stickyHeader: PropTypes.bool,
}

Layout.defaultProps = {
  stickyHeader: false,
}

export default Layout
