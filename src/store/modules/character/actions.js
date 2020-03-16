export const Types = {
  FETCH_CHARACTERS: '@character/FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS: '@character/FETCH_CHARACTERS_SUCCESS'
}

export function fetchCharacters () {
  return {
    type: Types.FETCH_CHARACTERS
  }
}

export function fetchCharactersSuccess (response) {
  return {
    type: Types.FETCH_CHARACTERS_SUCCESS,
    characters: response
  }
}
