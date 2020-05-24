import React from 'react';
import PropTypes, { string } from 'prop-types';

import Checkbox from '../Checkbox';
import Heading from '../Heading';

import './styles.scss';

function _checkboxByFilter(list, type) {
  return list.map((item) => (
    <Checkbox key={item} name={type} value={item} />
  ));
}

const Filter = ({ filter, type }) => (
  <div className="filter">
    <Heading type="h3" className="filter__heading">
      {type}
    </Heading>
    {_checkboxByFilter(filter, type)}
  </div>
);

Filter.propTypes = {
  filter: PropTypes.arrayOf(string).isRequired,
  type: PropTypes.string.isRequired
};

export default Filter;
