import React from 'react'
import Head from 'next/head'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import PageWrap from '../../components/PageWrap'

import { setDescription } from '../../../config/meta'

const About = () => (
  <Layout>
    <Head>
      <title key="title">Our Guarantee of Quality Service - BBF</title>
      <meta
        key="description"
        name="description"
        content={
          setDescription('From business cards to promotional gifts, you will not find a supplier more interested in getting things right than us.')
        }
      />
    </Head>
    <Hero title="Our Guarantee" />
    <PageWrap>
      <div
        className="bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: 'url(/static/images/guarantee-bg.png)' }}
      >
        <p>
          A dedicated team member will help and guide you to buy efficiently and effectively at the
          best possible price and will build an in depth knowledge of your requirements to make the
          purchasing of print as easy and painless as possible.
        </p>

        <p>
          You need not worry that we may not produce a good job for you - we will - and this is your
          guarantee of satisfaction. We have in excess of one thousand customers but you will always
          be the most important.
        </p>

        <p>
          We will do everything possible to ensure that whenever you need something printed you will
          ask Berkeley Business Forms, because you know you can rely on us.
        </p>

        <p>
          We take great pride in our expertise, efficiency and attention to detail, but in the
          unlikely event that you should ever be dissatisfied with any aspect of our work, please
          inform us and we will always endeavour to resolve your complaint.
        </p>

        <p>
          Your views will always be important to us as we want you to remain a satisfied customer
          for many years to come.
        </p>
      </div>
    </PageWrap>
  </Layout>
)

export default About
