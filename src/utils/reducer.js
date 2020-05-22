import { UPDATE_DATA } from './actions.json';

export const reducer = (currentState, action) => {
  switch (action.type) {
    case UPDATE_DATA: {
      const updateData = { ...currentState, data: action.data };
      return updateData;
    }
    default:
      return currentState;
  }
};
