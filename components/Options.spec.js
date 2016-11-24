import React from 'react'
import { shallow, mount } from 'enzyme'

import Options from './Options.js'


describe('<Options>', () => {
  it("should contain umbrella option", () => {
    const wrapper = shallow(
      <Options char=" " width={8} text="" onChange={() => {}}/>
    )
    expect(
      wrapper.contains(<option value="☂">☂</option>)
    ).toBeTruthy()
  })

  it("should trigger onChange", () => {
    const cb = jest.fn();
    const wrapper = mount(
      <Options char=" " width={8} text="" onChange={cb}/>
    )
    wrapper.find('input').last().simulate('change')
    expect(cb).toHaveBeenCalled()
  })
})
