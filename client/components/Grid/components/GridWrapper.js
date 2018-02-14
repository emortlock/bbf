import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const GridWrapper = ({ children, className }) => (
  <div className={classnames('px-4', className)}>
    <div className="flex flex-wrap -mx-4">
      { children }
    </div>
  </div>
)

GridWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

GridWrapper.defaultProps = {
  children: undefined,
  className: undefined,
}

export default GridWrapper
