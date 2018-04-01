/* eslint-disable react/prop-types */
import React from 'react'

import Field from '../components/Field'

const WithField = (Input) => {
  const WrappedInput = ({
    name,
    label,
    error,
    required,
    ...rest
  }) => (
    <Field
      name={name}
      label={label}
      error={error}
      required={required}
    >
      <Input
        {...rest}
        className="mb-2"
        name={name}
        required={required}
        invalid={!!error}
        aria-describedby={error ? `${name}Validation` : undefined}
      />
    </Field>
  )

  return WrappedInput
}

export default WithField
