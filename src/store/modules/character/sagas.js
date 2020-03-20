import { call, put, all, takeLatest } from 'redux-saga/effects';
import { API_KEY, HASH, TIME_STAMP } from '../../../config';
import request from '../../../services/request';

import * as CharacterActions from './actions';
import { loadingStart, loadingEnd } from '../loader/actions';

export function* fetchCharacters (action) {
  try {
    const name = action && action.characterName;
    const characterNameParameter = name ? `nameStartsWith=${name}&` : '';

    yield put(loadingStart());
    const response = yield call(request.get, `/characters?${characterNameParameter}apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`);
    yield put(CharacterActions.fetchCharactersSuccess(response.data));

  } catch (e) {
    yield put(CharacterActions.fetchCharactersError());
  } finally {
    yield put(loadingEnd());
  }
}

export function* fetchCharacterDetail ({ characterId }) {
  try {
    const response = yield call(request.get, `/characters/${characterId}?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`);
    yield put(CharacterActions.fetchCharacterDetailSuccess(response.data));
  } catch (e) {
    yield put(CharacterActions.fetchCharactersError());
  }
}

export function* fetchCharacterSeries ({ characterId }) {
  try {
    const response = yield call(request.get, `/characters/${characterId}/series?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`);
    yield put(CharacterActions.fetchCharacterSeriesSuccess(response.data));
  } catch (e) {
    yield put(CharacterActions.fetchCharactersError());
  }
}

export default all([
  takeLatest(CharacterActions.Types.FETCH_CHARACTERS, fetchCharacters),
  takeLatest(CharacterActions.Types.FETCH_CHARACTERS_FILTERED, fetchCharacters),
  takeLatest(CharacterActions.Types.FETCH_CHARACTER_DETAIL, fetchCharacterDetail),
  takeLatest(CharacterActions.Types.FETCH_CHARACTER_SERIES, fetchCharacterSeries),
]);
