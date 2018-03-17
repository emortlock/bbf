import React from 'react'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import PageWrap from '../../components/PageWrap'
import ProductGrid from '../../components/ProductGrid'

import products from '../../../config/products'

const Products = () => (
  <Layout>
    <Hero title="Our Products" />
    <PageWrap>
      <p>
        Find a range of high quality business stationery perfect for all your commercial needs.
        From payslips and invoices to letterheads and compliment slips; our continuous
        stationery printing services allow you to choose the colour, size and personalise
        almost every other aspect of your product.
      </p>
      <p>
        Whether you want access to an extensive range of printed products or simply a small
        selection of superior commercial forms; we can help you find an affordable solution to
        suit your exact requirements; without compromising on quality.
      </p>

      <ProductGrid products={products} className="-mx-8 -mb-8" />
    </PageWrap>
  </Layout>
)

export default Products
