import React from 'react';
import { shallow } from 'enzyme';
import Events from '../Events';

describe('Events', () => {
  const events = shallow(<Events />);

  it('renders properly', () => {
    expect(events).toMatchSnapshot();
  });
});