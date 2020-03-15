import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import CharactersList from "../../components/CharactersList";

import data from "../../__tests__/stubs/characters.data.result.json";

export default function Home () {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(data.data.results);
  }, [])


  return (
    <Container>
      <CharactersList characters={characters} />
    </Container>
  )
}
