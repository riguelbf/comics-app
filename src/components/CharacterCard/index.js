import React from 'react';
import PropTypes from 'prop-types';

import { MdAccountCircle, MdVpnKey } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Avatar from '../Avatar';
import { Container } from './styles';

import * as CharacterActions from '../../store/modules/character/actions';

function CharacterCard ({ character }) {

  const dispatch = useDispatch();
  const history = useHistory();

  function handleRedirectToDetail () {

    dispatch(CharacterActions.addSelectedCharacter({ ...character }));

    history.push({
      pathname: `/character/${character.id}`,
    });
  }

  return (
    <Container>
      <Avatar
        thumbnail={character.thumbnail}
        name={character.name}
        handleClick={() => handleRedirectToDetail()}
      />
      <aside>
        <span>
          <MdVpnKey size={20} color="#f2db00" />
          {character.id}
        </span>
        <strong>
          <MdAccountCircle size={20} color="#f2db00" />
          {character.name}
        </strong>
      </aside>
    </Container>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    })
  }).isRequired
};

export default CharacterCard;

