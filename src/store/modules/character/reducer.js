import { Types } from './actions';

export const INITIAL_STATE = {
  data: {
    results: []
  },
  selectedCharacter: {
    id: 0,
    name: '',
    thumbnail: {
      path: '',
      extension: ''
    }
  },
  seriesList: []
};

export default function reducer (state = INITIAL_STATE, action) {

  switch (action.type) {
    case Types.FETCH_CHARACTERS:
      return {
        ...state
      };

    case Types.FETCH_CHARACTERS_FILTERED:
      return action.characterName;

    case Types.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        data: action.characters.data
      };

    case Types.ADD_SELECTED_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.selectedCharacter
      };

    case Types.FETCH_CHARACTER_DETAIL:
      return { characterId: action.charactersId };

    case Types.FETCH_CHARACTER_DETAIL_SUCCESS:
      return {
        ...state,
        selectedCharacter: action.response.data.results[0]
      };

    case Types.FETCH_CHARACTER_SERIES:
      return { characterId: action.charactersId };


    case Types.FETCH_CHARACTER_SERIES_SUCCESS:
      return {
        ...state,
        seriesList: action.response.data.results
      };

    default:
      return INITIAL_STATE;
  }
}
