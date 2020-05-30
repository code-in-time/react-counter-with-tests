import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
test('counter starts at 0, clicking on the + button twice, the counter is 2', () => {
      const wrapper = mount(<App />)

      // Find and click the add button twice
      wrapper
            .findWhere(n => n.name() === 'Btn' && n.prop('operation') === '+')
            .find('[data-test="btn-box"]')
            .simulate('click')
            .simulate('click')
      const  counter = wrapper.find('Counter').find('[data-test="count-box"]')
      expect(counter.text()).toBe("2")
})

test('counter is 7, clicking on the - button twice, the counter is 5', () => {
      const wrapper = mount(<App />)

      wrapper
            .findWhere(n => n.name() === 'Btn' && n.prop('operation') === '+')
            .find('[data-test="btn-box"]')
            .simulate('click')
            .simulate('click')
            .simulate('click')
            .simulate('click')
            .simulate('click')
            .simulate('click')
            .simulate('click')

      wrapper
            .findWhere(n => n.name() === 'Btn' && n.prop('operation') === '-')
            .find('[data-test="btn-box"]')
            .simulate('click')
            .simulate('click')
      const  counter = wrapper.find('Counter').find('[data-test="count-box"]')
      expect(counter.text()).toBe("5")
})

