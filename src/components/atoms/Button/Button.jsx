import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  className, id, clicked, children
}) => React.createElement(
  'button',
  {
    type: 'button', className, id, onClick: clicked
  },
  children
);

Button.defaultProps = {
  className: '',
  id: null,
  clicked: null
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  clicked: PropTypes.func,
  id: PropTypes.string
};

export default Button;
