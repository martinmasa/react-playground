import React from 'react';
import { mount } from 'enzyme';

import Clock from './Clock';

describe('Clock component', () => {
  // TODO: find a better way to test time related behaviour without "knowing" much about implementation

  it('componentDidMount() - should setInterval', () => {
    spyOn(window, 'setInterval');
      
    const interval = 1000;
    const clockInstance = mount(<Clock />).instance();

    expect(window.setInterval).toHaveBeenCalledWith(jasmine.any(Function), interval);
  });

  it('tick() - should update state with new date', () => {
    const clockInstance = mount(<Clock />).instance();

    spyOn(clockInstance, 'setState');

    clockInstance.tick();

    expect(clockInstance.setState).toHaveBeenCalledWith(
      jasmine.objectContaining({'date': jasmine.any(Date)})
    );
  });

  it('componentWillUnmount() - should clearInterval', () => {
    spyOn(window, 'clearInterval');
      
    const clockInstance = mount(<Clock />).instance();

    clockInstance.componentWillUnmount();
    expect(window.clearInterval).toHaveBeenCalledWith(clockInstance.timerID);
  });
  
});
