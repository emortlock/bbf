import React from 'react'
import Head from 'next/head'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import PageWrap from '../../components/PageWrap'
import ProductGrid from '../../components/ProductGrid'

import products from '../../../config/products'

import { setDescription } from '../../../config/meta'

const Products = () => (
  <Layout>
    <Head>
      <title key="title">Our Product Range - BBF</title>
      <meta
        key="description"
        name="description"
        content={
          setDescription('Whether you need cost-effective compliment slips or lower priced payslips; you can find great value products and services here at BBF.')
        }
      />
    </Head>
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
