import { STORAGE_KEY, saveCharacter, getCharacters, getCharacterById } from "../../../services/localStorageService";

describe('LocalStorage service', () => {

  let characterDataMock = {};

  beforeEach(() => {
    localStorage.clear();
    characterDataMock = {
      id: 10,
      name: '',
      description: '',
      modified: '',
      thumbnail: {
        path: '',
        extension: ''
      },
      resourceURI: '',
      series: {
        collectionURI: ''
      }
    };
  });

  test('should to save character data', () => {

    characterDataMock.name = 'Fake name';
    characterDataMock.description = 'fake description';
    characterDataMock.modified = new Date().toString();

    characterDataMock.thumbnail = {
      path: 'fake path',
      extension: 'fake extension'
    };

    characterDataMock.series.collectionURI = 'fake collectionURI';
    characterDataMock.resourceURI = 'fake resourceURI';

    saveCharacter(characterDataMock);
    const characterSaved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    expect([characterDataMock]).toStrictEqual(characterSaved);
  });

  test('should to get character data', () => {

    characterDataMock.name = 'Fake name';
    characterDataMock.description = 'fake description';
    characterDataMock.modified = new Date().toString();

    characterDataMock.thumbnail = {
      path: 'fake path',
      extension: 'fake extension'
    };

    characterDataMock.series.collectionURI = 'fake collectionURI';
    characterDataMock.resourceURI = 'fake resourceURI';

    localStorage.setItem(STORAGE_KEY, JSON.stringify([characterDataMock]));

    const characterSaved = getCharacters();

    expect(characterSaved).toStrictEqual([characterDataMock]);
  });

  test('should to get by id character', () => {

    const characterId = 10;
    const characterDataOtherMock = { ...characterDataMock, id: 20 };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([characterDataMock, characterDataOtherMock]));

    const characterSaved = getCharacterById(characterId);

    expect(characterSaved).toStrictEqual(characterDataMock);
  });

  test('should to get by id character when have not characters stored', () => {

    const characterId = 10;
    const characterResult = {};

    const characterSaved = getCharacterById(characterId);

    expect(characterSaved).toStrictEqual(characterResult);
  });
});
