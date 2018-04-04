import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ children, onSubmit }) => (
  <form noValidate onSubmit={onSubmit} className="max-w-sm mx-auto">
    { children }
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
