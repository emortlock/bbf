import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import stylesheet from '../assets/styles/main.css'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {
    const { __NEXT_DATA__ } = this.props

    return (
      <html lang="en">
        <Head>
          {
            process.env.NODE_ENV === 'development' ? (
              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            ) : (
              <link
                rel="stylesheet"
                type="text/css"
                href={`/static/assets/${__NEXT_DATA__.buildId}.css`}
              />
            )
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
