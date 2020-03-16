import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';


export default function CharacterDetail () {

  const character = useSelector(state => state.characters.selectedCharacter);
  console.log('uhulll', character);


  return (
    <Container>
      Detail page
    </Container>
  );
}
