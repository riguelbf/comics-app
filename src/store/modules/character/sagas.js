import { call, put, all, takeLatest } from 'redux-saga/effects';
import { API_KEY, HASH, TIME_STAMP } from '../../../config';
import request from '../../../services/request';

import * as CharacterActions from './actions';

export function* fetchCharacters () {

  try {
    const response = yield call(request.get, `/characters?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}&offset=5`);
    yield put(CharacterActions.fetchCharactersSuccess(response.data));
  } catch (e) {
    yield put(CharacterActions.fetchCharactersError());
  }
}

export default all([
  takeLatest(CharacterActions.Types.FETCH_CHARACTERS, fetchCharacters),
]);
