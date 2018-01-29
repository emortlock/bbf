import React from 'react'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'

import About from './components/About'
import Service from './components/Service'
import Guarantee from './components/Guarantee'

const Home = () => (
  <Layout stickyHeader>
    <Hero title="Your Guarantee of Print Satisfaction" fullHeight>
      <p>
        Here you will find a bespoke printing service that can be tailored to suit your needs.
        Whether you need cost-effective compliment slips or lower priced payslips; you can find
        great value products and services here at Berkeley Business Forms
      </p>
    </Hero>

    <About />
    <Service />
    <Guarantee />
  </Layout>
)

export default Home
