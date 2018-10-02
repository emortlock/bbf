import React from 'react'

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
    <Hero title="The Print Experts" fullHeight>
      <p className="opacity-75 mb-4">
        Here you will find a bespoke printing service that can be tailored to
        suit your needs. Whether you need cost-effective compliment slips or
        lower priced payslips; you can find great value products and services
        here at BBF.
      </p>
      <div className="text-center mb-4">
        <ButtonLink tertiary large to="/contact">
          Request a Quote
        </ButtonLink>
      </div>
    </Hero>
    <PageWrap padding={false}>
      <Products />
      <Testimonials />
      <ContactDetails />
      <Guarantee />
      <Service />
    </PageWrap>
  </Layout>
)

export default Home
