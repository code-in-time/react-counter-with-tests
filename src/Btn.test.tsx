import React from 'react';
import { shallow } from 'enzyme';
import Btn from './Btn';

test('The btn component button text to be "Add"', () => {
      const wrapper = shallow(<Btn operation="+"  onClickFunc={jest.fn()} />)
      expect(wrapper.find('[data-test="btn-box"]').text()).toBe('Add')
})

test('The btn component button text to be "Subtract"', () => {
  const wrapper = shallow(<Btn operation="-" onClickFunc={jest.fn()} />)
  expect(wrapper.find('[data-test="btn-box"]').text()).toBe('Subtract')
})

test('The btn component button text to be "Add" if no prop operation is passed', () => {
  const wrapper = shallow(<Btn onClickFunc={jest.fn()}/>)
  expect(wrapper.find('[data-test="btn-box"]').text()).toBe('Add')
})

test('The btn component button can click the function that is passed in', () => {
  const mock = jest.fn()
  const wrapper = shallow(<Btn onClickFunc={()=> mock()} />)
  const btn = wrapper.find('[data-test="btn-box"]')
  btn.simulate('click')
  expect(mock).toHaveBeenCalledTimes(1)
})
