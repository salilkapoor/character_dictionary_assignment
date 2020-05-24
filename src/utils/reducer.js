import {
  UPDATE_DATA, FILTER_SELECTED, CLEAR_FILTER, SEARCH_NAME
} from './actions.json';

import { applyFilters, updateFilters, searchByName } from './applyFilters';

export const reducer = (currentState, action) => {
  switch (action.type) {
    case UPDATE_DATA: {
      const updateData = { ...currentState, data: action.data, unFilteredData: action.data };
      return updateData;
    }
    case FILTER_SELECTED:
    case CLEAR_FILTER: {
      const appliedFilters = updateFilters([...currentState.appliedFilters], action.filters);
      const filteredData = applyFilters(currentState.unFilteredData, appliedFilters);
      const updatedState = { ...currentState, data: filteredData, appliedFilters };
      return updatedState;
    }
    case SEARCH_NAME: {
      console.log(action.search);
      const results = searchByName(currentState.unFilteredData, action.search);
      const resultState = { ...currentState, data: results };
      return resultState;
    }
    default:
      return currentState;
  }
};
