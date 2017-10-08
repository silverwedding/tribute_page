import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

describe('Gallery', () => {
  const gallery = shallow(<Gallery />);
  const mockHandleSelect = jest.fn();

  it('renders properly', () => {
    expect(gallery).toMatchSnapshot();
  });

  it('it has a default state', () => {
    expect(gallery.state()).toEqual({
      index: 0,
      direction: null
    });
  });


});