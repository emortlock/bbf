import React from 'react'

import { getInputPropTypes, getInputDefaultProps } from '../utils/inputProps'

const TextInput = ({
  id,
  name,
  required,
  invalid,
  disabled,
  ...rest
}) => (
  <input
    {...rest}
    id={id || name}
    name={name}

    required={required}
    disabled={disabled}

    aria-disabled={disabled || undefined}
    aria-required={required === false ? required : undefined}
    aria-invalid={invalid || undefined}
  />
)

TextInput.propTypes = {
  ...getInputPropTypes('input'),
}

TextInput.defaultProps = {
  ...getInputDefaultProps('input'),
}

export default TextInput
