import React from 'react'

import Hero from '../../../components/Hero'
import { H2 } from '../../../components/Heading'
import Layout from '../../../components/Layout'
import PageWrap from '../../../components/PageWrap'
import { GridWrapper, GridItem } from '../../../components/Grid'

import { getById } from '../../../config/products'

const product = getById('continuousStationery')

const ContinuousStationery = () => (
  <Layout>
    <Hero title={product.name} />

    <PageWrap>
      <GridWrapper>
        <GridItem>
          <p>
            Fanfolded forms for processing on impact dot matrix printers.
          </p>
          <p>
            A comprehensive range of sizes and paper types are available for single and multi-part
            forms.
          </p>
          <p>
            Printed front and reverse in as many colours as you want and four colour process for
            pictures as well.
          </p>
          <H2 noDivider>Additional Features</H2>
          <ul>
            <li>Numbering</li>
            <li>Gluing</li>
            <li>Koboflex Tabbing</li>
            <li>Bar Coding</li>
            <li>Modulus Numbering</li>
            <li>Desensitising</li>
            <li>Self adhesive labels applied</li>
            <li>Security Datamailers</li>
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
    </PageWrap>
  </Layout>
)

export default ContinuousStationery
