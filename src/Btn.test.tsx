import React from 'react';
import { shallow } from 'enzyme';
import Btn from './Btn';
test('The btn component button text to be "Add"', () => {
      const wrapper = shallow(<Btn operation="+" />)
      expect(wrapper.find('[data-test="btn-box"]').text()).toBe('Add')
})

test('The btn component button text to be "Subtract"', () => {
  const wrapper = shallow(<Btn operation="-" />)
  expect(wrapper.find('[data-test="btn-box"]').text()).toBe('Subtract')
})

test('The btn component button text to be "Add" if no prop operation is passed', () => {
  const wrapper = shallow(<Btn />)
  expect(wrapper.find('[data-test="btn-box"]').text()).toBe('Add')
})

// test('The btn component button can click the function that is passed in', () => {
//   const wrapper = shallow(<Btn onClick= />)
//   expect(wrapper.find('[data-test="count-box"]').text()).toBe('0')
// })
