import React, { useContext } from 'react';

import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import { AppContext } from '../../../context';

function _selectedList(list) {
  return list.map((item) => (
    <Button key={item} type="default">
      {item}
    </Button>
  ));
}

const FilteredList = () => {
  const { store } = useContext(AppContext);

  return (
    <>
      <Heading type="h2">Selected Filters</Heading>
      {store?.filteredList
        ? _selectedList(store.filteredList)
        : 'No Filters Selected'}
    </>
  );
};

export default FilteredList;
