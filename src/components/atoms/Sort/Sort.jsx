import React, { useContext } from 'react';

import { AppContext } from '../../../context';

import { SORT_ID } from '../../../utils/actions.json';

function _sorter(e, dispatch) {
  dispatch({ type: SORT_ID, dir: e.target.value });
}

const Sort = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <select name="sorter" onChange={(e) => _sorter(e, dispatch)}>
      <option value="">Sort by ID</option>
      <option value="A">Ascending</option>
      <option value="D">Descending</option>
    </select>
  );
};

export default Sort;
