import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCharacters } from '../../store/modules/character/actions';

import { Wrapper } from './styles';
import CharactersList from "../../components/CharactersList";

export default function Home () {

  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.data.results);

  function handleFetchCharacters () {
    dispatch(fetchCharacters());
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
