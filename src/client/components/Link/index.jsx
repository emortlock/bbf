import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'

const Link = ({ children, className, href, ...rest }) => (
  <NextLink href={href}>
    <a {...rest} className={className}>
      {children}
    </a>
  </NextLink>
)

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
}

Link.defaultProps = {
  children: undefined,
  className: undefined,
}

export default Link
