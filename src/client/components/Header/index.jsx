import React from 'react'
import PropTypes from 'prop-types'
import { compose, withState } from 'recompose'
import classnames from 'classnames'
import Link from 'next/link'
import { withRouter } from 'next/router'

import Logo from '../../assets/images/site-logo.svg'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

const handleClick = (setOpen, value) => () => setOpen(value)

const Header = ({ open, setOpen, router }) => (
  <header
    className={classnames(
      'c-header',
      open && 'is-open',
    )}
  >
    <div className="c-header__inner">
      <div className="c-header__brand">
        <meta itemProp="alternateName" content="BBF" />
        <Link href="/">
          <a className="c-header__brand-logo" itemProp="url">
            <h1 className="mb-0">
              <span className="visually-hidden" itemProp="name">
                Berkeley Business Forms
              </span>
              <Logo width="106px" height="55px" />
              <link itemProp="logo" href="/static/images/logo@3x.png" />
            </h1>
          </a>
        </Link>
      </div>
      <div className="c-header__toggle">
        <button
          className="c-header__toggle-button"
          onClick={handleClick(setOpen, !open)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <nav className="c-header__nav">
        {
          links.map(link => (
            <Link key={link.path} href={link.path}>
              <a
                className={classnames(
                  'c-header__nav-link',
                  router.pathname === link.path && 'is-active',
                )}
              >
                { link.name }
              </a>
            </Link>
          ))
        }
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}

export default compose(
  withRouter,
  withState('open', 'setOpen', false),
)(Header)
