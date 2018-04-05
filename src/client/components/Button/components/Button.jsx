import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({
  children,
  onClick,
  className,
  primary,
  secondary,
  type,
  disabled,
  fullWidth,
}) => (
  <button
    type={type}
    className={classnames(
      'bg-white hover:bg-grey-light text-black hover:text-white py-2 px-4 rounded hover:no-underline',
      primary && 'bg-green hover:bg-green-light text-white',
      secondary && 'border-solid border-2 border-green text-green hover:bg-green hover:text-white',
      fullWidth && 'w-full',
      disabled && 'opacity-50 cursor-not-allowed',
      className,
    )}
    onClick={onClick}
    disabled={disabled}
  >
    { children }
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  className: undefined,
  onClick: undefined,
  primary: false,
  secondary: false,
  type: 'button',
  disabled: false,
  fullWidth: false,
}

export default Button
