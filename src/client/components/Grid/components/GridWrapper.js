import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const GridWrapper = ({ children, className, horizontallyCenter }) => (
  <div className={classnames('px-4', className)}>
    <div className={classnames('flex flex-wrap -mx-4', horizontallyCenter && 'justify-center')}>
      { children }
    </div>
  </div>
)

GridWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontallyCenter: PropTypes.bool,
}

GridWrapper.defaultProps = {
  children: undefined,
  className: undefined,
  horizontallyCenter: false,
}

export default GridWrapper
