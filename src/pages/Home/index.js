import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCharacters } from '../../store/modules/character/actions';

import { Wrapper } from './styles';
import CharactersList from "../../components/CharactersList";

export default function Home () {

  const dispatch = useDispatch();
  const { name } = useParams();
  const characters = useSelector(state => state.characters.data.results);

  async function handleFetchCharacters () {
    dispatch(fetchCharacters(name));
  }

  /*eslint-disable */
  useEffect(() => {
    handleFetchCharacters();
  }, []);

  return (
    <Wrapper>
      <CharactersList characters={characters} />
    </Wrapper>
  );
}
