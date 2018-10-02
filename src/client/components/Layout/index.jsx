import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { TailwindThemeProvider } from 'tailwind-react-ui'

import Footer from '../Footer'

import '../../styles/main.css'

import { description, title } from '../../config/meta'

import getStructuredDataProps from '../../utils/getStructuredDataProps'

import WithAnalytics from '../WithAnalytics'

class Layout extends Component {
  componentDidMount() {
    if (!document.documentElement.classList.contains('wf-active')) {
      import('webfontloader').then(WebFont => {
        WebFont.load({
          google: {
            families: ['Raleway:400,700'],
          },
        })
      })
    }
  }

  render() {
    const { children, homePage } = this.props

    return (
      <div>
        <Head>
          <title key="title">{title}</title>

          <meta key="charSet" charSet="utf8" />
          <meta key="description" name="description" content={description} />
          <meta key="geo.region" name="geo.region" content="GB-FLN" />
          <meta key="geo.placename" name="geo.placename" content="Shotton" />
          <meta
            key="geo.position"
            name="geo.position"
            content="53.211568;-3.0323"
          />
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta key="themeColor" name="theme-color" content="#007049" />

          <link key="manifest" rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <TailwindThemeProvider
          theme={{
            brandColors: {
              primary: 'teal',
              secondary: 'white',
              info: 'yellow',
            },
            textColors: {
              on: {
                primary: 'white',
                secondary: 'black',
                info: 'black',
              },
            },
          }}
        >
          <div
            {...getStructuredDataProps(
              {
                itemScope: true,
                itemType: 'http://schema.org/Organization',
              },
              homePage,
            )}
          >
            {children}
            <Footer showTestimonials={!homePage} structuredData={homePage} />
          </div>
        </TailwindThemeProvider>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  homePage: PropTypes.bool,
}

Layout.defaultProps = {
  homePage: false,
}

export default WithAnalytics(Layout)
