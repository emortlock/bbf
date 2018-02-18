import React from 'react'

import MapPin from '../../../assets/icons/map-pin.svg'
import Phone from '../../../assets/icons/phone.svg'
import Email from '../../../assets/icons/email.svg'

import { GridWrapper, GridItem } from '../../../components/Grid'
import { H2 } from '../../../components/Heading'
import Section from '../../../components/Section'

const Service = () => (
  <Section>
    <H2>Contact Us</H2>
    <GridWrapper>
      <GridItem className="w-full lg:w-1/3">
        <a href="https://goo.gl/maps/oHpt1ur9B962" className="text-black hover:text-green">
          <MapPin className="fill-current h-10 w-10 mb-2" />
          <p>
            Berkeley Business Forms Ltd.<br />
            Freepost RLYH-RUJU-BBSJ<br />
            Pendle Court, Evans Way<br />
            Rowleys Park, Shotton<br />
            Flintshire<br />
            CH5 1QJ
          </p>
        </a>
      </GridItem>

      <GridItem className="w-full lg:w-1/3">
        <a href="tel:01244831462" className="text-black hover:text-green">
          <Phone className="fill-current h-10 w-10 mb-2" />
          <p>01244 831462</p>
        </a>
      </GridItem>

      <GridItem className="w-full lg:w-1/3">
        <a href="tel:print@bbf.co.uk" className="text-black hover:text-green">
          <Email className="fill-current h-10 w-10 mb-2" />
          <p>print@bbf.co.uk</p>
        </a>
      </GridItem>
    </GridWrapper>
  </Section>
)

export default Service
