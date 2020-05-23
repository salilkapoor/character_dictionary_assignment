import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className }) => (
  React.createElement(
    'input',
    { type: 'text', className }
  )
);

Input.defaultProps = {
  className: ''
};

Input.propTypes = {
  className: PropTypes.string
};

export default Input;
