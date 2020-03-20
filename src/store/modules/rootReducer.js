/* istanbul ignore file */
import { combineReducers } from 'redux';

import CharacterReducer from "./character/reducer";
import LoaderReducer from './loader/reducer';

const reducers = combineReducers({
  characters: CharacterReducer,
  loader: LoaderReducer
});

export default reducers;
