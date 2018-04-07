import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import MapPin from '../../assets/icons/map-pin.svg'
import Phone from '../../assets/icons/phone.svg'
import Email from '../../assets/icons/email.svg'
import LinkedIn from '../../assets/icons/social-linkedin.svg'
import getStructuredDataProps from '../../utils/getStructuredDataProps'

import { GridWrapper, GridItem } from '../Grid'
import Testimonials from '../Testimonials'
import Image from '../Image'

const Footer = ({ showTestimonials, structuredData }) => (
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
        {...getStructuredDataProps({
          itemScope: true,
          itemType: 'http://schema.org/ContactPoint',
          itemProp: 'contactPoint',
        }, structuredData)}
      >
        <meta {...getStructuredDataProps({ itemProp: 'contactType', content: 'sales' }, structuredData)} />
        <ul className="list-reset flex flex-col justify-around h-full">
          <li className="mb-4 flex items-center">
            <Phone height="32px" width="32px" className="fill-current text-green flex-no-shrink w-8 h-8 mr-4" />
            <span>
              { structuredData && <meta itemProp="telephone" content="+441244831462" /> }
              <a href="tel:01244831462" className="text-white hover:text-green">
                01244 831462
              </a>
            </span>
          </li>
          <li className="mb-4 flex items-center">
            <Email height="32px" width="32px" className="fill-current text-green flex-no-shrink w-8 h-8 mr-4" />
            <span>
              <a href="mailto:print@bbf.co.uk" className="text-white hover:text-green">
                <span {...getStructuredDataProps({ itemProp: 'email' }, structuredData)}>
                  print@bbf.co.uk
                </span>
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
          {...getStructuredDataProps({ itemProp: 'sameAs' }, structuredData)}
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
        <ul className="list-reset">
          <li className="inline-block">
            <a
              href="/static/documents/privacy-notice.pdf"
              download
              className="text-white underline hover:text-green"
            >
              Privacy Notice
            </a>
          </li>
        </ul>
        <p>
          &copy;&nbsp;
          <span {...getStructuredDataProps({ itemProp: 'legalName' }, structuredData)}>
            Berkeley Business Forms Ltd.
          </span>
        </p>
      </GridItem>
    </GridWrapper>
  </footer>
)

Footer.propTypes = {
  showTestimonials: PropTypes.bool,
  structuredData: PropTypes.bool,
}

Footer.defaultProps = {
  showTestimonials: true,
  structuredData: false,
}

export default Footer
