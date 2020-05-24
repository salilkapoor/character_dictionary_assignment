import React, { useContext } from 'react';

import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import { AppContext } from '../../../context';

import { CLEAR_FILTER } from '../../../utils/actions.json';

import './styles.scss';

function _selectedList(filters, dispatch) {
  function _removeHandler(e) {
    const tempArr = e.target.id.split('-');

    dispatch({
      type: CLEAR_FILTER,
      filters: [tempArr[0], tempArr[1], false]
    });
  }

  return filters.map(({ type, typeVal }) => (
    <Button
      key={`${type}-${typeVal}`}
      id={`${type}-${typeVal}`}
      type="default"
      className="selected-filters__button"
      clicked={(e) => _removeHandler(e)}
    >
      {typeVal}
    </Button>
  ));
}

const FilteredList = () => {
  const { store, dispatch } = useContext(AppContext);

  return (
    <>
      <Heading type="h2" className="selected-filters__heading">
        Selected Filters
      </Heading>
      {store?.appliedFilters.length > 0
        ? _selectedList(store?.appliedFilters, dispatch)
        : 'No Filters Selected'}
    </>
  );
};

export default FilteredList;
