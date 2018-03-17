import React from 'react'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import PageWrap from '../../components/PageWrap'

import About from './components/About'
import Service from './components/Service'
import Guarantee from './components/Guarantee'
import Products from './components/Products'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'

const Home = () => (
  <Layout>
    <Hero
      title={<span>Your Guarantee of <br className="hidden sm:c-hero__break" />Print Satisfaction</span>}
      fullHeight
    >
      <p>
        Here you will find a bespoke printing service that can be tailored to suit your needs.
        Whether you need cost-effective compliment slips or lower priced payslips; you can find
        great value products and services here at Berkeley Business Forms.
      </p>
    </Hero>
    <PageWrap padded={false}>
      <About />
      <Service />
      <Testimonials />
      <Products />
      <Guarantee />
      <Contact />
    </PageWrap>
  </Layout>
)

export default Home
