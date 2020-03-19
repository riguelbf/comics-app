import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { MdEdit, MdVpnKey } from 'react-icons/md';
import { Container } from './styles';
import Avatar from '../Avatar';

import * as  CharacterActions from '../../store/modules/character/actions';

function DetailHeader () {

  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedCharacter = useSelector(state => state.characters.selectedCharacter);

  function handleGetCharacterDetail () {
    dispatch(CharacterActions.fetchCharacterDetail(id));
  }

  /*eslint-disable */
  useEffect(() => {
    handleGetCharacterDetail();
  }, []);

  return (
    <Container>
      <header />
      {
        selectedCharacter && (
          <div>
            <Avatar
              name={selectedCharacter.name}
              thumbnail={selectedCharacter.thumbnail}
            />
            <aside>
              <h1>{selectedCharacter.name}</h1>
              <span>
                <MdVpnKey />
                {selectedCharacter.id}
              </span>
              <span>{`Last modified on: ${selectedCharacter.modified}`}</span>
            </aside>
            <MdEdit size="60" />
          </div>
        )
      }
    </Container>
  );
}

export default DetailHeader;
