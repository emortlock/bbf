import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Link from 'next/link'

const ButtonLink = ({ children, to, className, primary, secondary, large }) => (
  <Link href={to}>
    <a
      className={classnames(
        'inline-block bg-white hover:bg-grey-light text-black hover:text-white rounded hover:no-underline',
        large ? 'py-4 px-8' : 'py-2 px-4',
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
  large: PropTypes.bool,
}

ButtonLink.defaultProps = {
  className: undefined,
  primary: false,
  secondary: false,
  large: false,
}

export default ButtonLink
