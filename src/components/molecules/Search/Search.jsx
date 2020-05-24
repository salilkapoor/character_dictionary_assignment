import React, { useState, useContext } from 'react';

import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Input from '../../atoms/Input';
import { AppContext } from '../../../context';

import { SEARCH_NAME } from '../../../utils/actions.json';

const Search = () => {
  const [search, setSearch] = useState(null);
  const { dispatch } = useContext(AppContext);

  return (
    <>
      <Heading type="h4">Search By Name</Heading>
      <Input changed={(e) => setSearch(e.target.value)} />
      <Button
        clicked={() => {
          console.log(search);
          dispatch({ type: SEARCH_NAME, search });
        }}
      >
        Search
      </Button>
    </>
  );
};

export default Search;
