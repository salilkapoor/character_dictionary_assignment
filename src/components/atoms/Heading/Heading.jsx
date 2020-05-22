import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ type, className, children }) => (
  React.createElement(type, { className }, children)
);

Heading.defaultProps = {
  className: ''
};

Heading.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Heading;
