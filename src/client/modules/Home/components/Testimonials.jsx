import React from 'react'

import { H2 } from '../../../components/Heading'
import Section from '../../../components/Section'
import Testimonials from '../../../components/Testimonials'

const Service = () => (
  <Section bgColour="green">
    <H2 dividerColour="white">Testimonials</H2>
    <Testimonials className="text-left" slidesToShow={2} max={6} arrowColour="white" />
  </Section>
)

export default Service
