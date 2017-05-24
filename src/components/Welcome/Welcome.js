import React from 'react';
import PropTypes from 'prop-types';

const Welcome = (props) => <h4>Welcome {props.name}!</h4>;

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

Welcome.defaultProps = {
  name: "World"
}

export default Welcome;
