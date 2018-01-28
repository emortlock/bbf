import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

const ButtonLink = ({ children, to }) => (
  <Link href={to}>
    <a className="bg-grey hover:bg-grey-dark text-white hover:text-white py-2 px-4 rounded hover:no-underline">
      { children }
    </a>
  </Link>
)

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default ButtonLink
