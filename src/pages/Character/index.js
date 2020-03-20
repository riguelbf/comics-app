import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form } from "@unform/web";

import { fetchCharacterDetail } from '../../store/modules/character/actions';

import { Wrapper } from './styles';
import Avatar from '../../components/Avatar';
import Input from '../../components/Input';

function Character () {

  const { characterId } = useParams();
  const dispatch = useDispatch();

  const {
    id,
    name,
    description,
    modified,
    thumbnail,
    resourceURI,
    series
  } = useSelector(state => state.characters.selectedCharacter);

  function handleFetchCharacterDetail (id) {
    dispatch(fetchCharacterDetail(id));
  }


  function handleSubmit (data) {
    console.log(data);
  }

  /*eslint-disable */
  useEffect(() => {
    handleFetchCharacterDetail(characterId);
  }, []);

  return (
    <Wrapper>
      <header>
        <Avatar
          data-testid="header-character"
          name="Hulk"
          thumbnail={thumbnail}
        />
      </header>
      <Form data-testid="form-character" onSubmit={handleSubmit}>
        <Input
          label="Id"
          name={"teste"}
          value={id}
        />
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
          <button type="submit" className="button">
            <span>Submit</span>
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Character;
