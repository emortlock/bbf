import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Link from 'next/link'
import { FillButton, OutlineButton } from 'tailwind-react-ui'

const ButtonLink = ({
  children,
  to,
  className,
  secondary,
  tertiary,
  outline,
  large,
}) => {
  const Component = outline ? OutlineButton : FillButton

  let brand = 'primary'

  if (secondary) {
    brand = 'secondary'
  } else if (tertiary) {
    brand = 'info'
  }

  return (
    <Link href={to} passHref>
      <Component
        inlineBlock
        brand={brand}
        is="a"
        className={classnames('c-button', className)}
        large={large}
      >
        {children}
      </Component>
    </Link>
  )
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  large: PropTypes.bool,
  outline: PropTypes.bool,
}

ButtonLink.defaultProps = {
  className: undefined,
  secondary: false,
  tertiary: false,
  large: false,
  outline: false,
}

export default ButtonLink
