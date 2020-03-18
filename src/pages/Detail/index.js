import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import DetailHeader from '../../components/DetailHeader';
import SeriesList from '../../components/SeriesList';

export default function CharacterDetail () {

  const character = useSelector(state => state.characters.selectedCharacter);

  return (
    <Container>
      <DetailHeader />
      <SeriesList characterId={1011334} />
    </Container>
  );
}
