import React from 'react'

import { H2 } from '../../../components/Heading'
import Section from '../../../components/Section'
import { ButtonLink } from '../../../components/Button'

const About = () => (
  <Section bgColour="green">
    <H2 dividerColour="white">About Us</H2>

    <p>
      BBF was established in 1990 and has become one of the leading print
      suppliers to companies large and small throughout the U.K. Everyone
      benefits from our tried and trusted competitive pricing structure and
      service.
    </p>

    <ButtonLink to="/about">Find out more</ButtonLink>
  </Section>
)

export default About
