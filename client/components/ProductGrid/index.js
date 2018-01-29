import React from 'react'

import { GridWrapper, GridItem } from '../Grid'

import products from './data'

const ProductGrid = () => (
  <GridWrapper>
    {
      products.map(product => (
        <GridItem key={product.key}>
          { product.name }
        </GridItem>
      ))
    }
  </GridWrapper>
)

export default ProductGrid
