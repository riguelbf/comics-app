import React from 'react';
import { useSelector } from 'react-redux';

import { Wrapper } from './styles';
import DetailHeader from '../../components/DetailHeader';
import SeriesList from '../../components/SeriesList';

export default function CharacterDetail () {

  const character = useSelector(state => state.characters.selectedCharacter);

  return (
    <Wrapper>
      <DetailHeader />
      <SeriesList characterId={1011334} />
    </Wrapper>
  );
}
