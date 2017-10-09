import React from 'react';
import { shallow } from 'enzyme';
import Timeline from '../Timeline';

describe('Timeline', () => {
  const timeline = shallow(<Timeline />);

  it('renders properly', () => {
    expect(timeline).toMatchSnapshot();
  });
});