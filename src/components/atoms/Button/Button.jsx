import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children }) => (
  React.createElement(
    'button',
    { type: 'button', className },
    children
  )
);

Button.defaultProps = {
  className: ''
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default Button;
