export const Types = {
  FETCH_CHARACTERS: '@character/FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS: '@character/FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR: '@character/FETCH_CHARACTERS_ERROR',
  ADD_SELECTED_CHARACTER: '@character/ADD_SELECTED_CHARACTER',
  FETCH_CHARACTER_DETAIL: '@character/FETCH_CHARACTER_DETAIL',
  FETCH_CHARACTER_DETAIL_SUCCESS: '@character/FETCH_CHARACTER_DETAIL_SUCCESS',
};

export function fetchCharacters () {
  return {
    type: Types.FETCH_CHARACTERS
  };
}

export function fetchCharactersSuccess (response) {
  return {
    type: Types.FETCH_CHARACTERS_SUCCESS,
    characters: response
  };
}

export function fetchCharactersError () {
  return {
    type: Types.FETCH_CHARACTERS_ERROR
  };
}

export function addSelectedCharacter (character) {
  return {
    type: Types.ADD_SELECTED_CHARACTER,
    selectedCharacter: character
  };
}

export function fetchCharacterDetail (characterId) {
  return {
    type: Types.FETCH_CHARACTER_DETAIL,
    characterId
  };
}

export function fetchCharacterDetailSuccess (response) {
  return {
    type: Types.FETCH_CHARACTER_DETAIL_SUCCESS,
    response
  };
}
