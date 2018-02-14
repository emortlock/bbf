import React from 'react'
import Head from 'next/head'

import { ButtonLink } from '../../../components/Button'
import { H2 } from '../../../components/Heading'
import Hero from '../../../components/Hero'
import Layout from '../../../components/Layout'
import PageWrap from '../../../components/PageWrap'
import { GridWrapper, GridItem } from '../../../components/Grid'

import products, { getById } from '../../../config/products'
import { setDescription } from '../../../config/meta'

const product = getById('businessStationery')

const productIndex = product.order - 1
const prev = productIndex - 1 >= 0 ? products[productIndex - 1] : products[products.length - 1]
const next = productIndex + 1 <= products.length ? products[productIndex + 1] : products[0]

const BusinessStationery = () => (
  <Layout>
    <Head>
      <title key="title">Get a quote from BBF for your printed business stationery</title>
      <meta
        key="description"
        name="description"
        content={
          setDescription(`Get in touch with us for a quote on your business stationery needs. Our services include ${product.tags.join(', ')}`)
        }
      />
    </Head>
    <Hero title={product.name} />
    <PageWrap>
      <GridWrapper>
        <GridItem>
          <p>
            Produced to the highest standards on lithographic printing presses on a wide variety of
            papers and cards.
          </p>
          <p>
            We can also produce on digital presses for smaller quantities. The quality of print by
            this method is excellent.
          </p>
          <H2 noDivider>Other Processes Suitable for Business Stationery</H2>
          <ul>
            <li>Thermography</li>
            <li>Foil Blocking</li>
            <li>Embossing</li>
            <li>Die Stamping</li>
          </ul>
        </GridItem>
        <GridItem>
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
        <ButtonLink to={`/products/${prev.path}`} className="float-left">
          { prev.name }
        </ButtonLink>
        <ButtonLink to={`/products/${next.path}`} className="float-right">
          { next.name }
        </ButtonLink>
      </div>
    </PageWrap>
  </Layout>
)

export default BusinessStationery
