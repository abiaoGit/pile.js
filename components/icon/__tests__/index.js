/**
 * @author renmaomin@126.com
 */
import React from 'react';
import { shallow } from 'enzyme';
import Icon from '..';

describe('Button suite', () => {
  it('render a icon', () => {
    const wrapper = shallow(<Icon type="artboardAdd" />);
    expect(wrapper).toMatchSnapshot();
  });
});
