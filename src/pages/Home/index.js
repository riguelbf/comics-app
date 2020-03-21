import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCharacters } from '../../store/modules/character/actions';

import { Wrapper } from './styles';
import CharactersList from "../../components/CharactersList";
import ProgressBar from '../../components/Loader';

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

  const loading = characters.length === 0;

  if (loading) return <ProgressBar visible={loading} />;

  return (
    <Wrapper>
      <h1>Characters</h1>
      <CharactersList characters={characters} />
    </Wrapper>
  );
}
