import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as CharacterActions from '../../store/modules/character/actions';

import { Wrapper } from './styles';
import DetailHeader from '../../components/DetailHeader';
import SeriesList from '../../components/SeriesList';

export default function CharacterDetail () {

  const dispatch = useDispatch();
  const { id = 1011334 } = useParams();
  const seriesList = useSelector(state => state.characters.seriesList);

  function handleFetchSeries () {
    dispatch(CharacterActions.fetchCharacterSeries(id));
  }

  /*eslint-disable */
  useEffect(() => {
    handleFetchSeries()
  }, [])

  return (
    <Wrapper>
      <DetailHeader />
      <SeriesList seriesList={seriesList} />
    </Wrapper>
  );
}
