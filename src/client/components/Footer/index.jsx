import React from 'react'
import Link from 'next/link'

import MapPin from '../../assets/icons/map-pin.svg'
import Phone from '../../assets/icons/phone.svg'
import Email from '../../assets/icons/email.svg'

import LinkedIn from '../../assets/icons/social-linkedin.svg'

import { GridWrapper, GridItem } from '../Grid'
import Testimonials from '../Testimonials'
import Image from '../Image'

const Footer = () => (
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

      <GridItem className="w-full sm:w-1/2 mb-4">
        <ul className="list-reset flex flex-col justify-around h-full">
          <li className="mb-4 flex items-center">
            <Phone height="32px" width="32px" className="fill-current text-green flex-no-shrink w-8 h-8 mr-4" />
            <span>
              <a href="tel:01244831462" className="text-white hover:text-green">
                01244 831462
              </a>
            </span>
          </li>
          <li className="mb-4 flex items-center">
            <Email height="32px" width="32px" className="fill-current text-green flex-no-shrink w-8 h-8 mr-4" />
            <span>
              <a href="mailto:print@bbf.co.uk" className="text-white hover:text-green">
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

      <GridItem className="w-full mb-4">
        <Testimonials max={3} arrowColour="white" useShort={false} />
      </GridItem>
    </GridWrapper>
    <hr className="border-solid border-0 border-t my-4 border-white opacity-50" />

    <GridWrapper spaceBetween>
      <GridItem className="sm:1/2 c-social">
        <p className="c-social__text">Join us on social media for our latest updates</p>
        <a
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
          &copy; Berkeley Business Forms Ltd.
        </p>
      </GridItem>
    </GridWrapper>
  </footer>
)

export default Footer
