import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const GridItem = ({ children, className }) => (
  <div className={classnames('px-4', className)}>
    { children }
  </div>
)

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

GridItem.defaultProps = {
  children: undefined,
  className: undefined,
}

export default GridItem
