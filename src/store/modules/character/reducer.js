import { Types } from './actions';
import characters from '../../../__tests__/stubs/characters.data.result.json';

export const INITIAL_STATE = characters;

export default function reducer (state = INITIAL_STATE, action) {

  switch (action.type) {
    case Types.FETCH_CHARACTERS:
      return state;

    case Types.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters
      };

    default:
      return INITIAL_STATE;
  }
}
