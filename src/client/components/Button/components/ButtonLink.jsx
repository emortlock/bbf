import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Link from 'next/link'

const ButtonLink = ({ children, to, className, primary, secondary }) => (
  <Link href={to}>
    <a
      className={classnames(
        'bg-white hover:bg-grey-light text-black hover:text-white py-2 px-4 rounded hover:no-underline',
        primary && 'bg-green hover:bg-green-light text-white',
        secondary && 'border-solid border-2 border-green text-green hover:bg-green hover:text-white',
        className,
      )}
    >
      { children }
    </a>
  </Link>
)

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
}

ButtonLink.defaultProps = {
  className: undefined,
  primary: false,
  secondary: false,
}

export default ButtonLink
