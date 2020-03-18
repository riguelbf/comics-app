import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import DetailHeader from '../../components/DetailHeader';


export default function CharacterDetail () {

  const character = useSelector(state => state.characters.selectedCharacter);

  console.log(character);

  return (
    <Container>
      <DetailHeader />
    </Container>
  );
}
