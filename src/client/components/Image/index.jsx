import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

const Image = ({ className, src, alt, placeholderHeight, loadOffset }) => (
  <LazyLoad height={placeholderHeight} offset={loadOffset} once>
    <img className={className} src={src} alt={alt} />
  </LazyLoad>
)

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  placeholderHeight: PropTypes.number,
  loadOffset: PropTypes.number,
}

Image.defaultProps = {
  className: undefined,
  alt: undefined,
  placeholderHeight: undefined,
  loadOffset: 50,
}

export default Image
