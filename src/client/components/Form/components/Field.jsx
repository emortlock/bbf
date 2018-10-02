import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ErrorIcon from '../../../assets/icons/error.svg'

/* eslint-disable jsx-a11y/label-has-for */
const Field = ({ children, name, label, error, required }) => (
  <div className={classnames('mb-4', !!error && 'has-error')}>
    <label htmlFor={name} className="block font-bold">
      {label}{' '}
      {required === false && (
        <span className="font-normal text-sm">(optional)</span>
      )}
    </label>
    {children}
    {!!error && (
      <div
        id={`${name}Validation`}
        role="alert"
        className="border rounded-sm border-solid border-red px-2 py-3 flex"
      >
        <ErrorIcon className="text-red h-6 w-6 fill-current inline-block mr-2" />
        <span>{error}</span>
      </div>
    )}
  </div>
)

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
}

Field.defaultProps = {
  error: undefined,
  required: undefined,
}

export default Field
