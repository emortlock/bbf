import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

const Image = ({ className, src, alt, placeholderHeight }) => (
  <LazyLoad height={placeholderHeight} offset="50" once>
    <img className={className} src={src} alt={alt} />
  </LazyLoad>
)

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  placeholderHeight: PropTypes.number,
}

Image.defaultProps = {
  className: undefined,
  alt: undefined,
  placeholderHeight: undefined,
}

export default Image
