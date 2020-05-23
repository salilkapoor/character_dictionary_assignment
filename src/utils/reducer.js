import { UPDATE_DATA, FILTER_SELECTED } from './actions.json';

import { applyFilters, updateFilters } from './applyFilters';

export const reducer = (currentState, action) => {
  switch (action.type) {
    case UPDATE_DATA: {
      const updateData = { ...currentState, data: action.data, unFilteredData: action.data };
      return updateData;
    }
    case FILTER_SELECTED: {
      const filters = updateFilters([...currentState.filters], action.filters);
      const filteredData = applyFilters(currentState.unFilteredData, action.filters);
      const updatedState = { ...currentState, data: filteredData, filters };
      return updatedState;
    }
    default:
      return currentState;
  }
};
