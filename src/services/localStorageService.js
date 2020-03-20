const STORAGE_KEY = 'comics-character';

const saveCharacter = (character) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
};

const getCharacter = () => {
  localStorage.getItem(STORAGE_KEY);
};

export { STORAGE_KEY, saveCharacter, getCharacter };
