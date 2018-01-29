import React from 'react'

import { H2 } from '../../../components/Heading'
import Section from '../../../components/Section'
import { ButtonLink } from '../../../components/Button'

const About = () => (
  <Section bgColour="grey">
    <H2 dividerColour="white">Our Guarantee</H2>

    <p>
      From business cards onwards, you will not find a supplier more interested in getting things
      right than us.
    </p>

    <ButtonLink to="/about">
      Find out more
    </ButtonLink>
  </Section>
)

export default About
