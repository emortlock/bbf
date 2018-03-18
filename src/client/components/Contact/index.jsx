import React from 'react'

import Post from '../../assets/images/contacts-post.svg'
import Phone from '../../assets/images/contacts-phone.svg'
import Email from '../../assets/images/contacts-email.svg'


import { GridWrapper, GridItem } from '../Grid'
import { H2 } from '../Heading'
import Section from '../Section'

const Service = () => (
  <Section>
    <H2>Contact Us</H2>
    <GridWrapper>
      <GridItem className="w-full lg:w-1/3">
        <a href="https://goo.gl/maps/oHpt1ur9B962" className="text-black hover:text-green">
          <Post className="mb-2" height="8rem" width="8rem" />
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
          <Phone className="mb-2" height="8rem" width="8rem" />
          <p>01244 831462</p>
        </a>
      </GridItem>

      <GridItem className="w-full lg:w-1/3">
        <a href="mailto:print@bbf.co.uk" className="text-black hover:text-green">
          <Email className="mb-2" height="8rem" width="8rem" />
          <p>print@bbf.co.uk</p>
        </a>
      </GridItem>
    </GridWrapper>
  </Section>
)

export default Service
