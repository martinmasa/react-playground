import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Welcome from './Welcome';

describe('Welcome component', () => {
  it('should render with default name', () => {
    const welcome = shallow(<Welcome />);
    expect(welcome.contains(<h4>Welcome World!</h4>)).toBe(true);
  });

  it('should render with given name property', () => {
    const welcome = shallow(<Welcome name="SomeRandomName" />);
    expect(welcome.contains(<h4>Welcome SomeRandomName!</h4>)).toBe(true);
  });
});
