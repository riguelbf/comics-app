import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function CharactersList ({ characters }) {
  return (
    <Container />
  )
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}

export default CharactersList;
