import React, { Fragment } from 'react'
import Head from 'next/head'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import PageWrap from '../../components/PageWrap'
import Section from '../../components/Section'
import { ContactDetails, ContactForm } from '../../components/Contact'

import features from '../../config/features'
import { setDescription } from '../../config/meta'

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
      <Section textAlign="left" padding="sm">
        <p>
          Get in touch with us using your preferred method below to benefit from a one to one
          contact with a highly trained and knowledgeable member of the team. They
          will follow your work through from start to finish and build an in depth knowledge
          of your company and the requirements you have.
        </p>
      </Section>
      <ContactDetails hideTitle />
      {
        features.contactForm && (
          <Fragment>
            <Section textAlign="left" padding="sm">
              <p>
                Alternatively you can fill in the short form below with details of what you are
                looking for or any questions you may have and one of our team will get back to
                you as soon as possible.
              </p>
            </Section>
            <ContactForm />
          </Fragment>
        )
      }
    </PageWrap>
  </Layout>
)

export default Contact
