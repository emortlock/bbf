import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../Image'

const ProductLink = ({ href, rel, target, image, name, tags }) => {
  const uses = tags.slice(0, 5)
  return (
    <a
      className="c-product relative text-center inline-block"
      href={href}
      rel={rel}
      target={target}
    >
      <Image className="max-w-full" src={image.src} alt={image.alt} placeholderHeight={215} />
      <div className="c-product__body">
        <h3 className="c-product_title">{ name }</h3>
        <p className="c-product__description">
          { `${uses.slice(0, -1).join(', ')} & ${uses.slice(-1)}` }
        </p>
      </div>
    </a>
  )
}
ProductLink.propTypes = {
  href: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
  image: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

ProductLink.defaultProps = {
  href: undefined,
  rel: undefined,
  target: undefined,
}

export default ProductLink
