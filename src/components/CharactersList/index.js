import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import CharacterCard from "../CharacterCard"

function CharactersList ({ characters }) {

  return (
    <Container>
      {
        characters.map(character => <CharacterCard key={character.id} character={character} />)
      }
    </Container>
  )
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
}

export default CharactersList;
