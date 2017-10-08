import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

describe('Gallery', () => {
  const gallery = shallow(<Gallery />);

  it('renders properly', () => {
    expect(gallery).toMatchSnapshot();
  });
});