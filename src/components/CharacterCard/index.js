import React from 'react';
import PropTypes from 'prop-types';
import { MdAccountCircle, MdVpnKey } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import * as CharacterActions from '../../store/modules/character/actions';

function CharacterCard ({ character }) {

  const dispatch = useDispatch();
  const history = useHistory();

  function handleRedirectToDetail () {

    dispatch(CharacterActions.addSelectedCharacter({ ...character }));

    history.push({
      pathname: `/character/${character.name}`,
      // search: `?characterName=${name}`,
      // state: { characterName: name }
    });
  }


  return (
    <Container>
      <article onClick={() => handleRedirectToDetail()} >
        <div className="mc-content">
          <div className="img-container">
            <img className="img-responsive"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          </div>
          {/* <div className="mc-description">
            He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...
          </div> */}
        </div>
        <footer>
          <span>
            <MdVpnKey size={20} color="#f2db00" />
            {character.id}
          </span>
          <strong>
            <MdAccountCircle size={20} color="#f2db00" />
            {character.name}
          </strong>
        </footer>
      </article>
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

