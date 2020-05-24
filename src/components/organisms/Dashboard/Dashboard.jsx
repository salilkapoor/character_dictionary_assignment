import React, { useContext, useEffect } from 'react';

import FilteredList from '../../molecules/FilteredList';
import Characters from '../../molecules/Characters';
import Filters from '../../molecules/Filters';
import Search from '../../molecules/Search';
import Sort from '../../atoms/Sort';
import { useFetch } from '../../../hooks';
import { AppContext } from '../../../context';

import { DEV } from '../../../../config/connections.json';
import { UPDATE_DATA } from '../../../utils/actions.json';

import './styles.scss';

const Dashboard = () => {
  const { loading, error, data } = useFetch(DEV);
  const { dispatch } = useContext(AppContext);
  // eslint-disable-next-line no-console
  // console.log(loading, error, data);

  useEffect(() => {
    if (data) {
      dispatch({ type: UPDATE_DATA, data: data?.results });
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error Occurred while Fetching Data...</p>;
  }

  return (
    <main className="dashboard">
      <aside className="dashboard__filters">
        <Filters />
      </aside>
      <section className="dashboard__content">
        <FilteredList />
        <div className="dashboard__content__search-sort-wrapper">
          <Search />
          <Sort />
        </div>
        <Characters />
      </section>
    </main>
  );
};

export default React.memo(Dashboard);
