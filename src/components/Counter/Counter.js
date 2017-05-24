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
          <h4>Counter modifier: { this.props.step }</h4>
        }
        <h3>{ this.state.count }</h3>
        <button className="button button-outline" onClick={ this.increment.bind(this) }>+</button>
        <button className="button button-outline" onClick={ this.decrement.bind(this) }>-</button>
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
