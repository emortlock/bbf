import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const GridItem = ({ children, className, gutterSize, ...rest }) => (
  <div
    {...rest}
    className={classnames(gutterSize === 'md' && 'px-4', className)}
  >
    {children}
  </div>
)

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gutterSize: PropTypes.oneOf(['zero', 'md']),
}

GridItem.defaultProps = {
  children: undefined,
  className: undefined,
  gutterSize: 'md',
}

export default GridItem
