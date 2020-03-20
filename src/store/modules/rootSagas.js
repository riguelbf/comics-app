/* istanbul ignore file */
import { all } from 'redux-saga/effects';

import characterSagas from "./character/sagas";

export default function* rootSaga () {
  yield all([
    characterSagas
  ]);
}
