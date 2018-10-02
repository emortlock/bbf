import React from 'react'

import { GridWrapper, GridItem } from '../../../components/Grid'
import { H2, H3 } from '../../../components/Heading'
import Section from '../../../components/Section'

import SavingMoreImage from '../../../assets/images/service-saving.svg'
import BetterStationeryImage from '../../../assets/images/service-better.svg'

const Service = () => (
  <Section>
    <H2>Our Service</H2>

    <GridWrapper>
      <GridItem className="w-full md:w-1/2">
        <SavingMoreImage
          width="10em"
          height="10em"
          viewBox="0 0 915.69 679.28"
        />
        <H3 noDivider className="md:w-64 mx-auto">
          Saving Your More on Your Stationery Printing
        </H3>

        <div className="text-left">
          <p>
            With BBF, it really is easy to reduce the cost of your stationery
            printing. You can compare your existing print costs when you
            freepost your current printed business forms and receive our no
            obligation quotation.
          </p>

          <p>
            Whether you want access to an extensive range of printed products or
            simply a small selection of superior commercial forms; we can help
            you find an affordable solution to suit your exact requirements;
            without compromising on quality.
          </p>

          <p>Just some of the ways we endeavour to save you money;</p>

          <ul>
            <li>Accurate no obligation quotes</li>
            <li>No hidden costs</li>
            <li>30 days nett terms</li>
            <li>No additional delivery charges</li>
            <li>Orders proofed prior to print</li>
            <li>No middle men</li>
          </ul>
        </div>
      </GridItem>

      <GridItem className="w-full md:w-1/2">
        <BetterStationeryImage
          width="10em"
          height="10em"
          viewBox="0 0 930 796"
        />
        <H3 noDivider className="md:w-64 mx-auto">
          Better Stationery for a Better Business
        </H3>

        <div className="text-left">
          <p>
            Find a range of high quality business stationery perfect for all
            your commercial needs. From payslips and invoices to letterheads and
            compliment slips; our continuous stationery printing services allow
            you to choose the colour, size and personalise almost every other
            aspect of your product.
          </p>

          <p>
            Whether you need unique corporate items or bespoke promotional
            printed products; you can be sure to receive professional and
            impressive looking items to keep your business branding at its best.
          </p>

          <p>
            As leading print suppliers for companies throughout the UK, we aim
            to provide a superior stationery printing service. Our team of
            dedicated professionals endeavour to meet and exceed all corporate
            expectations with our extensive range of products.
          </p>
        </div>
      </GridItem>
    </GridWrapper>
  </Section>
)

export default Service
