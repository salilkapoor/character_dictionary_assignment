import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, className }) => React.createElement('img', { src, alt, className });

Image.defaultProps = {
  className: ''
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;
