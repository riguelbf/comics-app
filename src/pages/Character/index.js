import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Form } from "@unform/web";
import { MdVpnKey } from 'react-icons/md';
import { fetchCharacterDetail } from '../../store/modules/character/actions';
import { saveCharacter } from '../../services/localStorageService';

import { Wrapper } from './styles';
import Avatar from '../../components/Avatar';
import Input from '../../components/Input';

function Character () {

  const { characterId } = useParams();
  const dispatch = useDispatch();

  const selectedCharacter = useSelector(state => state.characters.selectedCharacter);

  function build (character, data) {
    character.name = data.name;
    character.description = data.description;
    character.modified = data.modified;
    character.thumbnail.path = data.thumbnailLink.substr(0, data.thumbnailLink.length - 4);
    character.thumbnail.extension = data.thumbnailLink.substr(data.thumbnailLink.length - 3, 3);
    character.resourceURI = data.resourceURI;
    character.series.collectionURI = data.seriesCollectionURI;

    return { ...character };
  }

  function handleFetchCharacterDetail (id) {
    dispatch(fetchCharacterDetail(id));
  }


  function handleSubmit (data) {
    const characterBuilded = build(selectedCharacter, data);
    saveCharacter(characterBuilded);
  }

  /*eslint-disable */
  useEffect(() => {
    handleFetchCharacterDetail(characterId);
  }, []);

  const {
    id,
    name,
    description,
    modified,
    thumbnail,
    resourceURI,
    series
  } = selectedCharacter;

  return (
    <Wrapper>
      <header>
        <Avatar
          data-testid="header-character"
          name="Hulk"
          thumbnail={thumbnail}
        />
        <span>
          <MdVpnKey />
          {id}
        </span>
        <span>{name}</span>
      </header>
      <Form data-testid="form-character" onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          value={name}
        />
        <Input
          label="Description"
          name="description"
          value={description}
        />
        <Input
          label="Modified at"
          name="modified"
          value={new Date(modified).toDateString()}
        />
        <Input
          label="Thumbnail link"
          name="thumbnailLink"
          value={`${thumbnail.path}.${thumbnail.extension}`}
        />
        <Input
          label="Resource URI"
          name="resourceURI"
          value={resourceURI}
        />
        <Input
          label="Series collection link"
          name="seriesCollectionURI"
          value={`${series.collectionURI}`}
        />
        <div className="button-container">
          <button type="submit" className="button" data-testid="button-character">
            <span>Submit</span>
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Character;
