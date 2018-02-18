import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Link from 'next/link'

const ButtonLink = ({ children, to, className }) => (
  <Link href={to}>
    <a
      className={classnames(
        'bg-white hover:bg-grey-light text-black hover:text-white py-2 px-4 rounded hover:no-underline',
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
}

ButtonLink.defaultProps = {
  className: undefined,
}

export default ButtonLink
