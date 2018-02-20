import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { H1 } from '../Heading'

const Hero = ({ title, image, children, fullHeight }) => (
  <div
    className={classnames(
      'c-hero',
      fullHeight && 'c-hero--full-height',
    )}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="c-hero__overlay" />
    {
      (!!title || !!children) && (
        <div className="c-hero__body container">
          { title && <H1 className="c-hero__title">{ title }</H1> }
          { children && <div className="c-hero__tagline">{ children }</div> }
        </div>
      )
    }
  </div>
)

Hero.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  image: PropTypes.string,
  children: PropTypes.node,
  fullHeight: PropTypes.bool,
}

Hero.defaultProps = {
  title: undefined,
  image: '/static/images/hero.jpg',
  children: undefined,
  fullHeight: false,
}

export default Hero
