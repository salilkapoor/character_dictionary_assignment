import React from 'react';

import PropTypes from 'prop-types';

const Character = ({ character }) => {
  const {
    name,
    species,
    status,
    location,
    gender,
    created,
    id,
    origin
  } = character;

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>
      <dt>id</dt>
      <dd>{id}</dd>
      <dt>created</dt>
      <dd>{created}</dd>
      <dt>status</dt>
      <dd>{status}</dd>
      <dt>species</dt>
      <dd>{species}</dd>
      <dt>gender</dt>
      <dd>{gender}</dd>
      <dt>origin</dt>
      <dd>{origin.name}</dd>
      <dt>location</dt>
      <dd>{location.name}</dd>
    </dl>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    created: PropTypes.string.isRequired,
    episode: PropTypes.array.isRequired,
    gender: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    origin: PropTypes.object.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
