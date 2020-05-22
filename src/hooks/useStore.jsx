import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../context';
import * as fromUtils from '../utils';

export const useStore = ({ children }) => {
  const [store, dispatch] = useReducer(
    fromUtils.reducer,
    fromUtils.initialState
  );
  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

useStore.propTypes = {
  children: PropTypes.node.isRequired
};
