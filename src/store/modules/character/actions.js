export const Types = {
  FETCH_CHARACTERS: '@character/FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS: '@character/FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR: '@character/FETCH_CHARACTERS_ERROR'
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
