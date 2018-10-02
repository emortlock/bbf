import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Router from 'next/router'

import initGA from './utils/initGA'

export default WrappedComponent =>
  class GaWrapper extends Component {
    constructor(props) {
      super(props)

      this.trackPageview = this.trackPageview.bind(this)
    }

    componentDidMount() {
      initGA()
      this.trackPageview()
      Router.router.events.on('routeChangeComplete', this.trackPageview)
    }

    componentWillUnmount() {
      Router.router.events.off('routeChangeComplete', this.trackPageview)
    }

    trackPageview(path = document.location.pathname) {
      if (path !== this.lastTrackedPath) {
        ReactGA.pageview(path)
        this.lastTrackedPath = path
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
