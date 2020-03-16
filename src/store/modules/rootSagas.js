import { all } from 'redux-saga/effects';

import { fetchCharacters } from "./character/sagas";

export default function* rootSaga () {
  yield all([
    fetchCharacters
  ]);
}
