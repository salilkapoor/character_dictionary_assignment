import React, { useContext } from 'react';

import Character from '../Character';
import { AppContext } from '../../../context';

import './styles.scss';

const Characters = () => {
  const { store } = useContext(AppContext);

  const _populateCharacter = (characters) => characters.map((item) => (
    <li className="characters-list__character" key={item.id}>
      <Character character={item} />
    </li>
  ));

  return (
    <ul className="characters-list">
      {store?.data ? _populateCharacter(store.data) : null}
    </ul>
  );
};

export default Characters;
