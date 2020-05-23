import React from 'react';

import Filter from '../../atoms/Filter';
import Heading from '../../atoms/Heading';

import { filters } from './metaData.json';

const Filters = () => {
  const list = Object.keys(filters);

  function _filterByCategory() {
    return list.map((item) => <Filter key={item} filter={filters[item]} type={item} />);
  }

  return (
    <>
      <Heading type="h2">Filters</Heading>
      {_filterByCategory()}
    </>
  );
};

export default Filters;
