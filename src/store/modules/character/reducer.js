import { Types } from './actions';

export const INITIAL_STATE = {
  data: {
    results: []
  }
};

export default function reducer (state = INITIAL_STATE, action) {

  switch (action.type) {
    case Types.FETCH_CHARACTERS:
      return state;

    case Types.FETCH_CHARACTERS_SUCCESS:
      return { data: action.characters.data };

    default:
      return INITIAL_STATE;
  }
}
