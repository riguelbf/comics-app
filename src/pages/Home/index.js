import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCharacters } from '../../store/modules/character/actions';

import { Container } from './styles';
import CharactersList from "../../components/CharactersList";

export default function Home () {

  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.data.results);

  function handleFetchCharacters () {
    dispatch(fetchCharacters());
  }

  useEffect(() => {
    handleFetchCharacters();
  });

  return (
    <Container>
      <CharactersList characters={characters} />
    </Container>
  )
}
