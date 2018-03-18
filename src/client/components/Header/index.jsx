import React from 'react'
import PropTypes from 'prop-types'
import { compose, withState } from 'recompose'
import classnames from 'classnames'
import Link from 'next/link'
import { withRouter } from 'next/router'

import Logo from '../../assets/images/logo-sm.svg'

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
      'flex items-center justify-between flex-wrap p-4 absolute pin-x z-10',
      open && 'bg-green shadow-lg',
      'lg:bg-transparent lg:shadow-none',
    )}
  >
    <div className="flex items-center flex-no-shrink mr-6">
      <Link href="/">
        <a className="text-green hover:text-green hover:no-underline">
          <h1 className="mb-0">
            <Logo width="82px" height="30px" />
          </h1>
        </a>
      </Link>
    </div>
    <div className="block lg:hidden">
      <button
        className="flex items-center px-3 py-2 border rounded text-green border-white hover:text-green hover:border-green"
        onClick={handleClick(setOpen, !open)}
      >
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <nav
      className={classnames(!open && 'hidden', 'w-full block lg:flex lg:items-center lg:w-auto')}
    >
      {
        links.map(link => (
          <Link key={link.path} href={link.path}>
            <a
              className={classnames(
                'block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-light mr-4',
                router.pathname === link.path && 'text-green-light font-bold hover:no-underline cursor-default',
              )}
            >
              { link.name }
            </a>
          </Link>
        ))
      }
    </nav>
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
