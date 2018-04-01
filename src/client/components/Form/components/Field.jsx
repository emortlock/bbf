import React from 'react'
import PropTypes from 'prop-types'

const Field = ({
  children,
  name,
  label,
  error,
  required,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block font-bold">
      { label } { required === false && <span className="font-normal text-sm">(optional)</span> }
    </label>
    { children }
    { !!error && <div id={`${name}Validation`} role="alert">{ error }</div> }
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
