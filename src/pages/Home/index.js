import React from 'react'
import { Container } from './styles'

import CharactersList from "../../components/CharactersList"

import characters from "../../__tests__/stubs/characters.data.result.json"

export default function Home () {
  return (
    <Container>
      <CharactersList characters={characters.data.results} />
    </Container>
  )
}
