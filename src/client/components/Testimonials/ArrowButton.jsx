import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ArrowRight from '../../assets/icons/arrow-right.svg'
import ArrowLeft from '../../assets/icons/arrow-left.svg'

const ArrowButton = ({ className, direction, text, onClick }) => (
  <button
    className={classnames('cursor-pointer bg-transparent border-none', className)}
    onClick={onClick}
  >
    <span className="visually-hidden">{ text }</span>
    {
      direction === 'right'
        ? <ArrowRight className="fill-current h-8 w-8" width="32px" height="32px" />
        : <ArrowLeft className="fill-current h-8 w-8" width="32px" height="32px" />

    }
  </button>
)

ArrowButton.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

ArrowButton.defaultProps = {
  className: undefined,
}

export default ArrowButton
