import React from 'react'
import { shallow } from 'enzyme'

import PaddedText from './PaddedText.js'


describe('<PaddedText>', () => {
  it("should display text", () => {
    expect(
      shallow(<PaddedText text="Hello"/>).text()
    ).toEqual('Hello')
  })

  it("should convert spaces to non-breakables", () => {
    expect(
      shallow(<PaddedText text="   X"/>).html().indexOf('\u00a0\u00a0\u00a0X')
    ).not.toEqual(-1)
  })
})
