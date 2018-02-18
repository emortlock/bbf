import React from 'react'

import { H2 } from '../../../components/Heading'
import ProductGrid from '../../../components/ProductGrid'

import products from '../../../../config/products'

const Products = () => [
  <div key="title" className="text-center pt-8">
    <H2>Our Products</H2>
  </div>,
  <ProductGrid key="grid" className="mb-8" products={products} />,
]

export default Products
