import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ArrowRight from '../../assets/icons/arrow-right.svg'
import ArrowLeft from '../../assets/icons/arrow-left.svg'

const arrows = {
  left: ArrowLeft,
  right: ArrowRight,
}

const ArrowButton = ({ className, direction, text, onClick, colour }) => {
  const Arrow = arrows[direction]

  return (
    <button
      className={classnames('c-slider__arrow', className)}
      onClick={onClick}
    >
      <span className="c-slider__arrow-text">{ text }</span>
      <Arrow
        className={classnames('c-slider__arrow-icon', colour && `text-${colour}`)}
        width="32px"
        height="32px"
      />
    </button>
  )
}

ArrowButton.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  colour: PropTypes.string,
}

ArrowButton.defaultProps = {
  className: undefined,
  colour: undefined,
}

export default ArrowButton
