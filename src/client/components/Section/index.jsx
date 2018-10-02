import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Section = ({ children, bgColour, textAlign, padding, className }) => (
  <section
    className={classnames(
      padding !== 'sm' ? 'p-8' : 'p-4',
      bgColour === 'teal' && 'bg-teal text-white',
      bgColour === 'yellow' && 'bg-yellow-light text-black',
      bgColour === 'grey' && 'bg-grey-dark text-white',
      `text-${textAlign}`,
      className,
    )}
  >
    <div className="max-w-lg mx-auto">{children}</div>
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bgColour: PropTypes.string,
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  padding: PropTypes.oneOf(['sm']),
  className: PropTypes.string,
}

Section.defaultProps = {
  bgColour: 'white',
  textAlign: 'center',
  padding: undefined,
  className: undefined,
}

export default Section
