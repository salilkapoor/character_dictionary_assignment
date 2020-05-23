import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../../../context';

import { FILTER_SELECTED } from '../../../utils/actions.json';

const Checkbox = ({ name, value }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <>
      <label htmlFor={value}>
        <input
          type="checkbox"
          id={value}
          name={name}
          value={value}
          onChange={(e) => {
            dispatch({
              type: FILTER_SELECTED,
              filters: [
                e.target.name,
                e.target.value,
                e.target.checked
              ]
            });
          }}
        />
        {value}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Checkbox;
