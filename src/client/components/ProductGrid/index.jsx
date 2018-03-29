import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { GridWrapper, GridItem } from '../Grid'

import ProductLink from './components/ProductLink'

const baseUrl = '/products'

const ProductGrid = ({ className, products }) => (
  <GridWrapper className={className} horizontallyCenter>
    {
      products.sort((a, b) => a.order < b.order ? -1 : 1).map(product => (
        <GridItem key={product.key} className="sm:w-1/2 lg:w-1/3" gutterSize="zero">
          <Link href={`${baseUrl}${product.path}`} passHref>
            <ProductLink {...product} />
          </Link>
        </GridItem>
      ))
    }
  </GridWrapper>
)

ProductGrid.propTypes = {
  className: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
}

ProductGrid.defaultProps = {
  className: undefined,
}

export default ProductGrid
