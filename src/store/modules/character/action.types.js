export const Types = {
  FETCH_CHARACTERS: '@character/FETCH_CHARACTERS'
}

export function fetchCharacters () {
  return {
    type: Types.FETCH_CHARACTERS
  }
}
