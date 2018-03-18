import React from 'react'
import Link from 'next/link'

import MapPin from '../../assets/icons/map-pin.svg'
import Phone from '../../assets/icons/phone.svg'
import Email from '../../assets/icons/email.svg'

import { GridWrapper, GridItem } from '../Grid'
import Testimonials from '../Testimonials'

const Footer = () => (
  <footer className="bg-grey text-white p-4 clearfix">
    <GridWrapper>
      <GridItem className="w-full sm:w-1/2 xl:w-1/3 text-center self-center mb-4">
        <Link href="/guarantee">
          <a>
            <img
              className="h-48"
              src="/static/images/guarantee.png"
              alt="BBF guarantee of quality and service"
            />
          </a>
        </Link>
      </GridItem>

      <GridItem className="w-full sm:w-1/2 xl:w-1/3 mb-4">
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

      <GridItem className="w-full xl:w-1/3 mb-4">
        <Testimonials max={3} arrowColour="white" />
      </GridItem>
    </GridWrapper>
    <hr className="border-solid border-0 border-t my-4 border-white opacity-50" />
    <div className="float-right pr-4">
      &copy; Berkeley Business Forms Ltd.
    </div>
  </footer>
)

export default Footer
