import { UPDATE_DATA, FILTER_SELECTED, CLEAR_FILTER } from './actions.json';

import { applyFilters, updateFilters } from './applyFilters';

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
    default:
      return currentState;
  }
};
