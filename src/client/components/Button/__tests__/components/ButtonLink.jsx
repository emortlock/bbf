import React from 'react'
import { shallow } from 'enzyme'

import { ButtonLink } from '../..'

const setup = (testProps = {}) => {
  const props = {
    to: '/',
    ...testProps,
  }

  const wrapper = shallow(<ButtonLink {...props}>Content</ButtonLink>)

  return {
    props,
    wrapper,
  }
}

describe('ButtonLink', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
