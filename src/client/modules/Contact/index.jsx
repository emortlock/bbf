import React from 'react'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import PageWrap from '../../components/PageWrap'
import ContactContent from '../../components/Contact'

const Contact = () => (
  <Layout>
    <Hero title="Contact Us" />
    <PageWrap>
      <ContactContent />
    </PageWrap>
  </Layout>
)

export default Contact
