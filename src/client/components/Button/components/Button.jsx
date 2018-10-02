import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { OutlineButton, FillButton } from 'tailwind-react-ui'

const Button = ({
  children,
  onClick,
  className,
  type,
  secondary,
  disabled,
  fullWidth,
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
    <Component
      inlineBlock
      brand={brand}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classnames('c-button', className)}
      large={large}
      fullWidth={fullWidth}
    >
      {children}
    </Component>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  tertiary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  large: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  className: undefined,
  onClick: undefined,
  tertiary: false,
  secondary: false,
  outline: false,
  large: false,
  type: 'button',
  disabled: false,
  fullWidth: false,
}

export default Button
