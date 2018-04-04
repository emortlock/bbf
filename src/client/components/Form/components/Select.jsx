import React from 'react'
import classnames from 'classnames'

import { getInputPropTypes, getInputDefaultProps } from '../utils/inputProps'

const Select = ({
  id,
  name,
  className,
  required,
  invalid,
  disabled,
  placeholder,
  options,
  ...rest
}) => (
  <select
    {...rest}
    id={id || name}
    name={name}
    className={classnames(className, 'c-input c-input--select')}
    required={required}
    disabled={disabled}
    aria-disabled={disabled || undefined}
    aria-required={required === false ? required : undefined}
    aria-invalid={invalid || undefined}
  >
    {
      placeholder && (
        <option value="">
          { placeholder }
        </option>
      )
    }
    {
      options.map(option => (
        <option key={`${name}-${option.value}`} value={option.value}>
          { option.label }
        </option>
      ))
    }
  </select>
)

Select.propTypes = {
  ...getInputPropTypes('select'),
}

Select.defaultProps = {
  ...getInputDefaultProps('select'),
}

export default Select
