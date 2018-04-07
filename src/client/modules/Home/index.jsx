import React from 'react'

import features from '../../config/features'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import PageWrap from '../../components/PageWrap'
import { ContactDetails } from '../../components/Contact'
import { ButtonLink } from '../../components/Button'

import Service from './components/Service'
import Guarantee from './components/Guarantee'
import Products from './components/Products'
import Testimonials from './components/Testimonials'

const Home = () => (
  <Layout homePage>
    <Hero
      title={<span>Your Guarantee of <br className="hidden sm:c-hero__break" />Print Satisfaction</span>}
    >
      <p className="opacity-75 mb-2">
        Here you will find a bespoke printing service that can be tailored to suit your needs.
        Whether you need cost-effective compliment slips or lower priced payslips; you can find
        great value products and services here at Berkeley Business Forms.
      </p>
      {
        features.contactForm && (
          <ButtonLink primary large to="/contact#contactForm">
            Request a Quote
          </ButtonLink>
        )
      }
    </Hero>
    <PageWrap padded={false}>
      <Products />
      <Testimonials />
      <ContactDetails />
      <Guarantee />
      <Service />
    </PageWrap>
  </Layout>
)

export default Home
