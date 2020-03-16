import { call, put } from 'redux-saga/effects';
import { API_KEY, HASH, TIME_STAMP } from '../../../config';
import request from '../../../services/request';

import { fetchCharactersSuccess } from './actions';

export function* fetchCharacters () {

  try {
    const response = yield call(request.get, `/characters?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`);
    yield put(fetchCharactersSuccess(response.data));
  } catch (e) {
  }
}
