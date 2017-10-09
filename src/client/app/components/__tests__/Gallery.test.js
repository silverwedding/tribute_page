import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../Gallery';

describe('Gallery', () => {
  const gallery = shallow(<Gallery />);

  it('renders properly', () => {
    expect(gallery).toMatchSnapshot();
  });

  it('contains a Carousel component', () => {
    expect(gallery.find('Carousel').exists()).toBe(true);
  });

  it('it has a default state', () => {
    expect(gallery.state()).toEqual({
      index: 0,
      direction: null
    });
  });

  describe('on carousel arrow select', () => {
    it('updates current carousel image', () => {
      const carousel = gallery.find('Carousel');
      carousel.simulate('select', 1, { direction: 'next' });

      expect(gallery.state()).toEqual({
        index: 1,
        direction: 'next'
      });
    });
  });
});