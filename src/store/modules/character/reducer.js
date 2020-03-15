import { Types } from './action.types';
import characters from '../../../__tests__/stubs/characters.data.result.json';

export const INITIAL_STATE = characters;

export default function reducer (state = INITIAL_STATE, action) {

  switch (action.type) {
    case Types.FETCH_CHARACTERS:
      return state;

    default:
      return INITIAL_STATE;
  }

}
