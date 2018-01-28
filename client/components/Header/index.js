import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Header = ({ sticky }) => (
  <header
    className={classnames(
      'flex items-center justify-between flex-wrap bg-grey p-4',
      sticky && 'fixed pin-x',
    )}
  >
    <div className="flex items-center flex-no-shrink text-green mr-6">
      <span className="font-serif font-bold text-xl">Berkeley Business Forms</span>
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
