import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Section = ({ children, bgColour }) => (
  <section
    className={classnames(
      'text-center p-8',
      bgColour === 'green' && 'bg-green-light text-white',
    )}
  >
    <div className="max-w-lg mx-auto">
      { children }
    </div>
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bgColour: PropTypes.oneOf(['white', 'green']),
}

Section.defaultProps = {
  bgColour: 'white',
}

export default Section
