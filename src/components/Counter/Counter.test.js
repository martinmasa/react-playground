import React from 'react';
import { mount } from 'enzyme';

import Counter from './Counter';

describe('Clock component', () => {
  it('increment() - should add 1 to the count if no step property is provided', () => {
    const counterInstance = mount(<Counter />).instance();
    const expectedNewCount = counterInstance.state.count + 1;

    counterInstance.increment();
    const newCount = counterInstance.state.count;
    expect(newCount).toEqual(expectedNewCount);
  });
  
  it('increment() - should add 4 to the count if step property provided is 4', () => {
    const counterInstance = mount(<Counter step={4}/>).instance();
    const expectedNewCount = counterInstance.state.count + 4;

    counterInstance.increment();
    const newCount = counterInstance.state.count;
    expect(newCount).toEqual(expectedNewCount);
  });
  
  it('decrement() - should subtract 1 to the count if no step property is provided', () => {
    const counterInstance = mount(<Counter />).instance();
    const expectedNewCount = counterInstance.state.count - 1;

    counterInstance.decrement();
    const newCount = counterInstance.state.count;
    expect(newCount).toEqual(expectedNewCount);
  });
  
  it('decrement() - should subtract 7 to the count if step property provided is 7', () => {
    const counterInstance = mount(<Counter step={7}/>).instance();
    const expectedNewCount = counterInstance.state.count - 7;

    counterInstance.decrement();
    const newCount = counterInstance.state.count;
    expect(newCount).toEqual(expectedNewCount);
  });
});

