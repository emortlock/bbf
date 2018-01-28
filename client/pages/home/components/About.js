import React from 'react'
import Link from 'next/link'

import Section from '../../../components/Section'

const About = () => (
  <Section bgColour="green">
    <h2>About</h2>

    <p>
      Berkeley Business Forms Ltd was established in 1990 and has become one of the leading print
      suppliers to companies large and small throughout the U.K. Everyone benefits from our tried
      and trusted competitive pricing structure and service.
    </p>

    <Link href="/about">
      <a>Find out more</a>
    </Link>
  </Section>
)

export default About
