import { call, put, all, takeLatest } from 'redux-saga/effects';
import { API_KEY, HASH, TIME_STAMP } from '../../../config';
import request from '../../../services/request';

import * as CharacterActions from './actions';

export function* fetchCharacters () {
  try {
    const response = yield call(request.get, `/characters?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`);
    yield put(CharacterActions.fetchCharactersSuccess(response.data));
  } catch (e) {
    yield put(CharacterActions.fetchCharactersError());
  }
}

export function* fetchCharacterDetail ({ characterId }) {
  console.log('sagas', characterId);
  try {
    const response = yield call(request.get, `/characters/${characterId}?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`);
    yield put(CharacterActions.fetchCharacterDetailSuccess(response.data));
  } catch (e) {
    console.log(e);

    yield put(CharacterActions.fetchCharactersError());
  }
}

export function* fetchCharacterSeries ({ characterId }) {
  console.log('sagas', characterId);
  try {
    const response = yield call(request.get, `/characters/${characterId}/series?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`);
    yield put(CharacterActions.fetchCharacterSeriesSuccess(response.data));
  } catch (e) {
    console.log(e);

    yield put(CharacterActions.fetchCharactersError());
  }
}

export default all([
  takeLatest(CharacterActions.Types.FETCH_CHARACTERS, fetchCharacters),
  takeLatest(CharacterActions.Types.FETCH_CHARACTER_DETAIL, fetchCharacterDetail),
  takeLatest(CharacterActions.Types.FETCH_CHARACTER_SERIES, fetchCharacterSeries),
]);
