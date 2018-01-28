import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'next/link'

const Header = ({ sticky }) => (
  <header
    className={classnames(
      'flex items-center justify-between flex-wrap bg-grey p-4',
      sticky && 'fixed pin-x z-50',
    )}
  >
    <div className="flex items-center flex-no-shrink mr-6">
      <Link href="/">
        <a className="text-green hover:text-green hover:no-underline">
          <h1 className="font-serif font-bold text-xl mb-0">
            Berkeley Business Forms
          </h1>
        </a>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  sticky: PropTypes.bool,
}

Header.defaultProps = {
  sticky: false,
}

export default Header
