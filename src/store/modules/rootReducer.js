import { combineReducers } from 'redux';

import CharacterReducer from "./character/reducer";

const reducers = combineReducers({
  characters: CharacterReducer
});

export default reducers;
