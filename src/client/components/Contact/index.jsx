import React from 'react'

import Post from '../../assets/images/contact-post.svg'
import Phone from '../../assets/images/contact-phone.svg'
import Email from '../../assets/images/contact-email.svg'

import PostIcon from '../../assets/icons/map-pin.svg'
import PhoneIcon from '../../assets/icons/phone.svg'
import EmailIcon from '../../assets/icons/email.svg'

import { GridWrapper, GridItem } from '../Grid'
import { H2 } from '../Heading'
import Section from '../Section'

const Service = () => (
  <Section>
    <H2>Contact Us</H2>
    <GridWrapper
      horizontallyCenter
      itemScope
      itemType="http://schema.org/ContactPoint"
      itemProp="contactPoint"
    >
      <meta itemProp="contactType" content="sales" />
      <GridItem className="w-full md:w-1/2 lg:w-1/3">
        <a href="https://goo.gl/maps/oHpt1ur9B962" className="text-black hover:text-green">
          <Post className="hidden md:inline-block mb-2" height="8rem" width="8rem" />
          <PostIcon className="md:hidden fill-current h-10 w-10 mb-2" />

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

      <GridItem className="w-full md:w-1/2 lg:w-1/3">
        <meta itemProp="telephone" content="+441244831462" />
        <a href="tel:+441244831462" className="text-black hover:text-green">
          <Phone className="hidden md:inline-block mb-2" height="8rem" width="8rem" />
          <PhoneIcon className="md:hidden fill-current h-10 w-10 mb-2" />
          <p>01244 831462</p>
        </a>
      </GridItem>

      <GridItem className="w-full md:w-1/2 lg:w-1/3">
        <a href="mailto:print@bbf.co.uk" className="text-black hover:text-green">
          <Email className="hidden md:inline-block mb-2" height="8rem" width="8rem" />
          <EmailIcon className="md:hidden fill-current h-10 w-10 mb-2" />

          <p itemProp="email">print@bbf.co.uk</p>
        </a>
      </GridItem>
    </GridWrapper>
  </Section>
)

export default Service
