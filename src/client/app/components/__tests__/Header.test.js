import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  const header = shallow(<Header />);

  it('renders properly', () => {
    expect(header).toMatchSnapshot();
  });

  it('contains a Jumbotron component', () => {
    expect(header.find('Jumbotron').exists()).toBe(true);
  });

  it('contains a Gallery component', () => {
    expect(header.find('Gallery').exists()).toBe(true);
  });
});