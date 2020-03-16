import { Types } from './actions';

export const INITIAL_STATE = {
  data: {
    results: []
  },
  selectedCharacter: {}
};

export default function reducer (state = INITIAL_STATE, action) {

  switch (action.type) {
    case Types.FETCH_CHARACTERS:
      return {
        ...state
      };

    case Types.FETCH_CHARACTERS_SUCCESS:
      return { data: action.characters.data };

    case Types.ADD_SELECTED_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.selectedCharacter
      };

    default:
      return INITIAL_STATE;
  }
}
