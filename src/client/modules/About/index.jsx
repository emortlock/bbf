import React from 'react'
import Head from 'next/head'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import PageWrap from '../../components/PageWrap'

import { setDescription } from '../../config/meta'

import LocalBusiness from './LocalBusiness'

const About = () => (
  <Layout>
    <Head>
      <title key="title">About Us - BBF</title>
      <meta
        key="description"
        name="description"
        content={setDescription(
          'Established in 1990 BBF is a family run business that has an enviable reputation for good service, quality and price. We are proud to offer an unequalled service to companies large and small throughout the U.K.',
        )}
      />
    </Head>
    <Hero title="About Us" />
    <PageWrap>
      <p>
        Berkeley Business Forms Ltd was established in 1990 and has become one
        of the leading print suppliers to companies large and small throughout
        the U.K. Everyone benefits from our tried and trusted competitive
        pricing structure and service.
      </p>

      <p>
        We have an enviable reputation for good service, quality and price,
        built up over the years by a team of professionals dedicated to making
        our customers lives just that little bit easier.
      </p>

      <p>
        Print buyers already converted to the Berkeley Business Forms way of
        doing things will be benefiting from a ‘one to one’ contact with a
        highly trained, knowledgeable and experienced member of the team who
        will follow your work through from start to finish and build an in depth
        knowledge of your company and the requirements you have.
      </p>

      <p>
        Our in house designed computer system helps the team to keep a close
        control on all work in progress as well as inform you when our records
        show that your stock may need replenishing.
      </p>

      <p>
        We also deliver on call-off if that is a requirement and of course,
        delivery nationwide is not a problem.
      </p>

      <p>
        You will see from this site that we offer a wide range of products and
        this is increasing constantly so as we can truly offer a ‘one stop shop’
        where everything you buy is competitively priced and delivered with
        speed and efficiency.
      </p>

      <p>
        We are proud to offer an unequalled service, price and quality which we
        hope you will enjoy for many years to come.
      </p>

      <p>
        David Mortlock
        <br />
        Founder
      </p>

      <LocalBusiness />
    </PageWrap>
  </Layout>
)

export default About
