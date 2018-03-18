import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { ButtonLink } from '../../components/Button'
import { H2 } from '../../components/Heading'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import PageWrap from '../../components/PageWrap'
import { GridWrapper, GridItem } from '../../components/Grid'

import { getById } from '../../../config/products'
import { setDescription } from '../../../config/meta'

const Product = ({ id }) => {
  const product = getById(id)
  const { Content } = product

  return (
    <Layout>
      <Head>
        <title key="title">Get a quote from BBF for your { product.name }</title>
        <meta
          key="description"
          name="description"
          content={
            setDescription(`Get in touch with us for a quote on your ${product.name} needs. Our services include ${product.tags.join(', ')}`)
          }
        />
      </Head>
      <Hero title={product.name} />
      <PageWrap>
        <GridWrapper className="mb-4">
          <GridItem className="md:w-3/4">
            <Content />
          </GridItem>
          <GridItem className="md:w-1/4">
            <H2 noDivider>Uses</H2>
            <ul>
              {
                product.tags.map(tag => (
                  <li key={tag}>{ tag }</li>
                ))
              }
            </ul>
          </GridItem>
        </GridWrapper>

        <div className="clearfix">
          <ButtonLink to="/products" className="float-left" secondary>
            Back to Product List
          </ButtonLink>
          <ButtonLink to="/contact" className="float-right" primary>
            Contact Us for a Quote
          </ButtonLink>
        </div>
      </PageWrap>
    </Layout>
  )
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Product
