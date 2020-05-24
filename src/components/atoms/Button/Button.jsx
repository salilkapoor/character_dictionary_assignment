import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  className, id, changed, children
}) => React.createElement(
  'button',
  {
    type: 'button', className, id, onClick: changed
  },
  children
);

Button.defaultProps = {
  className: '',
  id: null,
  changed: null
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  changed: PropTypes.func,
  id: PropTypes.string
};

export default Button;
