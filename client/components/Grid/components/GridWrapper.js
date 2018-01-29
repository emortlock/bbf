import React from 'react'
import PropTypes from 'prop-types'

const GridWrapper = ({ children }) => (
  <div className="px4">
    <div className="flex flex-wrap -mx-4">
      { children }
    </div>
  </div>
)

GridWrapper.propTypes = {
  children: PropTypes.node,
}

GridWrapper.defaultProps = {
  children: undefined,
}

export default GridWrapper
