import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, value }) => (
  <>
    <label htmlFor={value}>
      <input
        type="checkbox"
        id={value}
        name={name}
        value={value}
        onChange={(e) => {
          console.log(e.target.value, e.target.name);
        }}
      />
      {value}
    </label>
  </>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Checkbox;
