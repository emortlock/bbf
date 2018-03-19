import React from 'react'
import Head from 'next/head'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import PageWrap from '../../components/PageWrap'
import ContactContent from '../../components/Contact'

import { setDescription } from '../../../config/meta'

const Contact = () => (
  <Layout>
    <Head>
      <title key="title">Contact Us Today for a No Obligation Quote - BBF</title>
      <meta
        key="description"
        name="description"
        content={
          setDescription('Get in touch with us today for no-obligation a tailored quote. A dedicated team member will help and guide you to buy efficiently and effectively at the best possible price.')
        }
      />
    </Head>
    <Hero title="Contact Us" />
    <PageWrap>
      <ContactContent />
    </PageWrap>
  </Layout>
)

export default Contact
