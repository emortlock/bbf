import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ children, onSubmit, ...rest }) => (
  <form {...rest} noValidate onSubmit={onSubmit} className="max-w-lg mx-auto">
    {children}
  </form>
)

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
}

Form.defaultProps = {
  onSubmit: undefined,
}

export default Form
