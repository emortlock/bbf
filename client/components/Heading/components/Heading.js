import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Heading = ({ HeadingLevel, children, className, dividerColour }) => (
  <HeadingLevel
    className={classnames(
      'c-heading',
      dividerColour && `c-heading--divider-${dividerColour}`,
      className,
    )}
  >
    { children }
  </HeadingLevel>
)

Heading.propTypes = {
  HeadingLevel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dividerColour: PropTypes.string,
}

Heading.defaultProps = {
  className: undefined,
  dividerColour: undefined,
}

export default Heading
