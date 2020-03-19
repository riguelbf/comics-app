export const Types = {
  FETCH_CHARACTERS: '@character/FETCH_CHARACTERS',
  FETCH_CHARACTERS_FILTERED: '@character/FETCH_CHARACTERS_FILTERED',
  FETCH_CHARACTERS_SUCCESS: '@character/FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR: '@character/FETCH_CHARACTERS_ERROR',
  ADD_SELECTED_CHARACTER: '@character/ADD_SELECTED_CHARACTER',
  FETCH_CHARACTER_DETAIL: '@character/FETCH_CHARACTER_DETAIL',
  FETCH_CHARACTER_DETAIL_SUCCESS: '@character/FETCH_CHARACTER_DETAIL_SUCCESS',
  FETCH_CHARACTER_SERIES: '@character/FETCH_CHARACTER_SERIES',
  FETCH_CHARACTER_SERIES_SUCCESS: '@character/FETCH_CHARACTER_SERIES_SUCCESS',
};

export function fetchCharacters (characterName) {
  return {
    type: Types.FETCH_CHARACTERS,
    characterName
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

export function fetchCharacterSeries (characterId) {
  return {
    type: Types.FETCH_CHARACTER_SERIES,
    characterId
  };
}

export function fetchCharacterSeriesSuccess (response) {
  return {
    type: Types.FETCH_CHARACTER_SERIES_SUCCESS,
    response
  };
}
