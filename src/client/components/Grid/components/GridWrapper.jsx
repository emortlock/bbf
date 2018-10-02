import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const GridWrapper = ({
  children,
  className,
  horizontallyCenter,
  spaceBetween,
  ...rest
}) => (
  <div {...rest} className={classnames('px-4', className)}>
    <div
      className={classnames(
        'flex flex-wrap -mx-4',
        horizontallyCenter && 'justify-center',
        spaceBetween && 'justify-between',
      )}
    >
      {children}
    </div>
  </div>
)

GridWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontallyCenter: PropTypes.bool,
  spaceBetween: PropTypes.bool,
}

GridWrapper.defaultProps = {
  children: undefined,
  className: undefined,
  horizontallyCenter: false,
  spaceBetween: false,
}

export default GridWrapper
