import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Heading = ({ HeadingLevel, children, className, dividerColour, noDivider, center }) => (
  <HeadingLevel
    className={classnames(
      'c-heading',
      center && 'c-heading--center',
      noDivider && 'c-heading--no-divider',
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
  noDivider: PropTypes.bool,
  center: PropTypes.bool,
}

Heading.defaultProps = {
  className: undefined,
  dividerColour: undefined,
  noDivider: false,
  center: false,
}

export default Heading
