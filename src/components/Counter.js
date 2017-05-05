import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  increment() {
    this.setState((prevState, props) => ({
      count: prevState.count + props.step
    }));
  }

  decrement() {
    this.setState((prevState, props) => ({
      count: prevState.count - props.step
    }));
  }

  render() {
    return (
      <div>
        { this.props.step > 1 &&
          <p>Counter modifier: { this.props.step }</p>
        }

        <h3>{ this.state.count }</h3>
        <button onClick={ this.increment.bind(this) }>+</button>
        <button onClick={ this.decrement.bind(this) }>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number
};

Counter.defaultProps = {
  step: 1
};

export default Counter;
