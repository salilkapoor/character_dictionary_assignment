import React from 'react';

import FilteredList from '../../molecules/FilteredList';
import Characters from '../../molecules/Characters';
import useFetch from '../../../hooks';

import { DEV } from '../../../../config/connections.json';

const Dashboard = () => {
  const { loading, error, data } = useFetch(DEV);
  // eslint-disable-next-line no-console
  console.log(loading, error, data);

  return (
    <>
      <FilteredList />
      <Characters />
    </>
  );
};

export default Dashboard;
