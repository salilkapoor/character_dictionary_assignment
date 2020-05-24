import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, changed, id }) => (
  React.createElement(
    'input',
    {
      type: 'text', className, onChange: changed, id
    }
  )
);

Input.defaultProps = {
  className: '',
  changed: null,
  id: ''
};

Input.propTypes = {
  className: PropTypes.string,
  changed: PropTypes.func,
  id: PropTypes.string
};

export default Input;
