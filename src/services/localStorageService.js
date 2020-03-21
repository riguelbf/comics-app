const STORAGE_KEY = 'comics-character';

const getCharacters = () => {
  const characters = localStorage.getItem(STORAGE_KEY);
  return characters == null ? [] : JSON.parse(characters);
};

const getCharacterById = (id) => {
  const characters = getCharacters();
  return !characters.length ? {} : characters.find(c => c.id === id);
};

const saveCharacter = (character) => {
  const charactersStored = getCharacters();
  const characters = [...charactersStored, character];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
};

export { STORAGE_KEY, saveCharacter, getCharacters, getCharacterById };
