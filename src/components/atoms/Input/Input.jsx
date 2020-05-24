import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, changed }) => (
  React.createElement(
    'input',
    { type: 'text', className, onChange: changed }
  )
);

Input.defaultProps = {
  className: '',
  changed: null
};

Input.propTypes = {
  className: PropTypes.string,
  changed: PropTypes.func
};

export default Input;
