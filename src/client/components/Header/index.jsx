import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import {
  Header as TRHeader,
  NavBrand,
  NavMenu,
  NavItem,
} from 'tailwind-react-ui'

import Logo from '../../assets/images/site-logo.svg'

import getStructuredDataProps from '../../utils/getStructuredDataProps'

import Link from '../Link'

const links = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Products', path: '/products' },
  { name: 'Get in Touch', path: '/contact' },
]

const Header = ({ router, structuredData }) => (
  <TRHeader
    className="c-header"
    bg="transparent"
    id="header"
    screen={false}
    p={0}
  >
    <NavBrand
      className="c-logo"
      is={Link}
      href="/"
      {...getStructuredDataProps({ itemProp: 'url' }, structuredData)}
    >
      <h1 className="mb-0 w-full">
        <span className="visually-hidden">BBF - The Print Experts</span>
        <Logo className="c-logo__image" />
        {structuredData && (
          <link itemProp="logo" href="/static/images/logo@3x.png" />
        )}
      </h1>
    </NavBrand>
    <NavMenu
      shadow-md
      absolute-md
      pin-md={['t', 'r']}
      w="full"
      w-md="auto"
      bg="white"
      rounded-md="bl"
      flex
      list={{
        fullWidth: true,
        m: { b: 0 },
      }}
    >
      {links.map(link => (
        <NavItem
          is={Link}
          key={link.path}
          href={link.path}
          active={router.pathname === link.path}
          text={['teal', 'center']}
          text-hocus="teal-dark"
          m={0}
        >
          {link.name}
        </NavItem>
      ))}
    </NavMenu>
  </TRHeader>
)

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  structuredData: PropTypes.bool,
}

Header.defaultProps = {
  structuredData: false,
}

export default withRouter(Header)
