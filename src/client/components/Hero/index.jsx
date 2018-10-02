import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'tailwind-react-ui'
import classnames from 'classnames'

import { H1 } from '../Heading'
import Header from '../Header'

const Hero = ({ title, children, fullHeight }) => (
  <div className={classnames('c-hero', !fullHeight && 'c-hero--small')}>
    <span className="c-hero__accent-left" />
    <span className="c-hero__accent-right" />
    <div className="c-hero__inner">
      <Header className="c-header" structuredData={fullHeight} />
      <div className="c-hero__main">
        <Container className="c-hero__content">
          {title && <H1 className="c-hero__title">{title}</H1>}
          {children && <div className="c-hero__tagline">{children}</div>}
        </Container>
      </div>
    </div>
  </div>
)

Hero.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  fullHeight: PropTypes.bool,
}

Hero.defaultProps = {
  title: undefined,
  children: undefined,
  fullHeight: false,
}

export default Hero
