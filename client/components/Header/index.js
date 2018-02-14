import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'

const Header = () => (
  <header
    className={classnames(
      'flex items-center justify-between flex-wrap bg-transparent p-4 absolute bg-transparent pin-x z-10',
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

export default Header
