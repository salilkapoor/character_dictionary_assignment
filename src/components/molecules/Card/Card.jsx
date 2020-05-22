import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../atoms/Image';
import Heading from '../../atoms/Heading';
import Character from './Character';
import {
  ImageContainer,
  IntroContainer,
  DescContainer
} from './Intro/Intro';
import { yearsDiff } from '../../../utils/jsUtils';

import './styles.scss';

const Card = ({ character }) => {
  const {
    name, image, id, created
  } = character;

  return (
    <>
      <ImageContainer>
        <Image
          src={image}
          alt={name}
          className="card__character-img"
        />
        <IntroContainer>
          <Heading type="h3" className="card__character-title">
            {name}
          </Heading>
          <DescContainer>
            {`id: ${id} - created ${yearsDiff(created)} years ago`}
          </DescContainer>
        </IntroContainer>
      </ImageContainer>
      <Character character={character} />
    </>
  );
};

Card.propTypes = {
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

export default Card;
