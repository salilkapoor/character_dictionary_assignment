import React from 'react';
import PropTypes, { string } from 'prop-types';

import Checkbox from '../Checkbox';

function _checkboxByFilter(list, type) {
  return list.map((item) => (
    <Checkbox key={item} name={type} value={item} />
  ));
}

const Filter = ({ filter, type }) => _checkboxByFilter(filter, type);

Filter.propTypes = {
  filter: PropTypes.arrayOf(string).isRequired,
  type: PropTypes.string.isRequired
};

export default Filter;
