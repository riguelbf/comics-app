import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { MdEdit, MdVpnKey } from 'react-icons/md';
import { Container } from './styles';
import Avatar from '../Avatar';
import ProgressBar from '../Loader';

import { fetchCharacterDetail } from '../../store/modules/character/actions';

function DetailHeader () {

  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const selectedCharacter = useSelector(state => state.characters.selectedCharacter);

  function handleGetCharacterDetail () {
    dispatch(fetchCharacterDetail(id));
    setLoading(false);
  }

  /*eslint-disable */
  useEffect(() => {
    handleGetCharacterDetail();
  }, []);

  function handleRedirectToEdit (characterId) {
    history.push(`/character/${characterId}/edit`);
  }

  if (loading || !selectedCharacter) return <ProgressBar visible={true} />

  const { name, thumbnail, characterId = id, modified } = selectedCharacter;

  return (
    <Container>
      <header />
      <div>
        <Avatar
          name={name}
          thumbnail={thumbnail}
        />
        <aside>
          <h1>{name}</h1>
          <span>
            <MdVpnKey />
            {characterId}
          </span>
          <span>{`Last modified on: ${new Date(modified).toDateString()}`}</span>
        </aside>
        <MdEdit size="60" onClick={() => handleRedirectToEdit(characterId)} />
      </div>
    </Container>
  );
}

export default DetailHeader;
