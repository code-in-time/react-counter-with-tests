import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';
test('that the count component value is 0 when no prop is added', () => {
      const wrapper = shallow(<Counter />)
      expect(wrapper.find('[data-test="count-box"]').text()).toBe('0')
})

test('that the count component has a prop value of 5', () => {
      const wrapper = shallow(<Counter count={5} />)
      expect(wrapper.find('[data-test="count-box"]').text()).toBe('5')
})