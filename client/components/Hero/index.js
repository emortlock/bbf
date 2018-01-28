import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import defaultImage from '../../assets/images/hero.jpg'

const Hero = ({ title, image, children, fullHeight }) => (
  <div
    className={classnames(
      'bg-cover bg-center flex flex-col justify-center w-screen',
      fullHeight ? 'min-h-screen' : 'min-h-screen-1/2',
    )}
    style={{ backgroundImage: `url(${image})` }}
  >
    {
      (!!title || !!children) && (
        <div className="mx-auto text-white text-center max-w-lg p-4">
          { title && <h1 className="mb-4 uppercase text-5xl">{ title }</h1> }
          { children && <div className="opacity-75 text-lg">{ children }</div> }
        </div>
      )
    }
  </div>
)

Hero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.node,
  children: PropTypes.node,
  fullHeight: PropTypes.bool,
}

Hero.defaultProps = {
  title: undefined,
  image: defaultImage,
  children: undefined,
  fullHeight: false,
}

export default Hero
