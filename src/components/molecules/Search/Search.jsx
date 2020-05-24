import React, { useState, useContext } from 'react';

import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { AppContext } from '../../../context';

import { SEARCH_NAME } from '../../../utils/actions.json';

import './styles.scss';

const Search = () => {
  const [search, setSearch] = useState(null);
  const { dispatch } = useContext(AppContext);

  return (
    <div className="search">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="search__label" htmlFor="search">
        Search By Name
      </label>
      <Input
        id="search"
        className="search__input"
        changed={(e) => setSearch(e.target.value)}
      />
      <Button
        className="search__button"
        clicked={() => {
          dispatch({ type: SEARCH_NAME, search });
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
