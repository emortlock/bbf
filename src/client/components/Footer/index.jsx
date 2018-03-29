import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import MapPin from '../../assets/icons/map-pin.svg'
import Phone from '../../assets/icons/phone.svg'
import Email from '../../assets/icons/email.svg'

import LinkedIn from '../../assets/icons/social-linkedin.svg'

import { GridWrapper, GridItem } from '../Grid'
import Testimonials from '../Testimonials'
import Image from '../Image'

const Footer = ({ showTestimonials }) => (
  <footer className="bg-grey text-white p-4 clearfix">
    <GridWrapper>
      <GridItem className="w-full sm:w-1/2 text-center self-center mb-4">
        <Link href="/guarantee">
          <a title="Learn more about our guarantee of quality and service">
            <Image
              className="h-48"
              src="/static/images/guarantee.png"
              alt="BBF guarantee of quality and service"
              placeholderHeight={192}
            />
          </a>
        </Link>
      </GridItem>

      <GridItem
        className="w-full sm:w-1/2 mb-4"
        itemScope
        itemType="http://schema.org/ContactPoint"
        itemProp="contactPoint"
      >
        <meta itemProp="contactType" content="sales" />
        <ul className="list-reset flex flex-col justify-around h-full">
          <li className="mb-4 flex items-center">
            <Phone height="32px" width="32px" className="fill-current text-green flex-no-shrink w-8 h-8 mr-4" />
            <span>
              <meta itemProp="telephone" content="+441244831462" />
              <a href="tel:01244831462" className="text-white hover:text-green">
                01244 831462
              </a>
            </span>
          </li>
          <li className="mb-4 flex items-center">
            <Email height="32px" width="32px" className="fill-current text-green flex-no-shrink w-8 h-8 mr-4" />
            <span>
              <a href="mailto:print@bbf.co.uk" className="text-white hover:text-green" itemProp="email">
                print@bbf.co.uk
              </a>
            </span>
          </li>
          <li className="mb-4 flex items-center">
            <MapPin height="32px" width="32px" className="fill-current text-green flex-no-shrink w-8 h-8 mr-4" />
            <span>
              <a href="https://goo.gl/maps/oHpt1ur9B962" className="text-white hover:text-green">
                Pendle Court, Evans Way, Rowleys Park, Shotton, Flintshire. CH5 1QJ
              </a>
            </span>
          </li>
        </ul>
      </GridItem>
      {
        showTestimonials && (
          <GridItem className="w-full mb-4">
            <Testimonials max={3} arrowColour="white" useShort={false} />
          </GridItem>
        )
      }
    </GridWrapper>
    <hr className="border-solid border-0 border-t my-4 border-white opacity-50" />

    <GridWrapper spaceBetween>
      <GridItem className="sm:1/2 c-social">
        <p className="c-social__text">Join us on social media for our latest updates</p>
        <a
          itemProp="sameAs"
          href="https://www.linkedin.com/company/berkeley-business-forms-limited/"
          target="_blank"
          rel="noopener noreferrer"
          className="c-social__link"
        >
          <span className="visually-hidden">Linked In</span>
          <LinkedIn className="c-social__icon" />
        </a>
      </GridItem>
      <GridItem className="sm:1/2 text-right">
        <p>
          &copy; <span itemProp="legalName">Berkeley Business Forms Ltd.</span>
        </p>
      </GridItem>
    </GridWrapper>
  </footer>
)

Footer.propTypes = {
  showTestimonials: PropTypes.bool,
}

Footer.defaultProps = {
  showTestimonials: true,
}

export default Footer
