import { STORAGE_KEY, saveCharacter } from "../../../services/localStorageService";

describe('LocalStorage service', () => {

  let characterDataMock = {};

  beforeEach(() => {
    localStorage.clear();
    characterDataMock = {
      id: 0,
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

    expect(characterDataMock).toStrictEqual(characterSaved);
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

    saveCharacter(characterDataMock);
    const characterSaved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    expect(characterDataMock).toStrictEqual(characterSaved);
  });
});
