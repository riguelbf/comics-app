import { runSaga } from 'redux-saga';
import { fetchCharacters, fetchCharacterDetail, fetchCharacterSeries } from '../../../store/modules/character/sagas';
import { fetchCharactersSuccess, fetchCharactersError, fetchCharacterDetailSuccess, fetchCharacterSeriesSuccess } from '../../../store/modules/character/actions';

import { API_KEY, HASH, TIME_STAMP } from '../../../config';

import { axiosMock } from '../../helpers/axiosMock';
import characters from '../../stubs/characters.data.result.json';
import characterDetail from '../../stubs/character-detail-data-result.json';
import seriesList from '../../stubs/character-series-data-result.json';
import charactersFiltered from '../../stubs/characters.data.filtered.result.json';

describe('Character sagas', () => {

  let axiosMocked = {};

  beforeEach(() => {
    axiosMocked = axiosMock;
  });

  test('should to fetch characters list', async () => {
    const dispatch = jest.fn();
    axiosMocked.onGet(`/characters?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`).reply(200, characters);

    await runSaga({ dispatch }, fetchCharacters).toPromise();

    expect(dispatch).toHaveBeenCalledWith(fetchCharactersSuccess(characters));
  });

  test('should have a error when to fetch characters list', async () => {
    const dispatch = jest.fn();
    axiosMocked.onGet(`/characters?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`).reply(500);

    await runSaga({ dispatch }, fetchCharacters).toPromise();

    expect(dispatch).toHaveBeenCalledWith(fetchCharactersError());
  });

  test('should to get charater info details', async () => {
    const characterId = 1010729;
    const dispatch = jest.fn();

    axiosMocked
      .onGet(`/characters/${characterId}?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`)
      .reply(200, characterDetail);

    await runSaga({ dispatch }, fetchCharacterDetail, { characterId }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(fetchCharacterDetailSuccess(characterDetail));
  });

  test('should to get series list of character', async () => {
    const characterId = 1010729;
    const dispatch = jest.fn();

    axiosMocked
      .onGet(`/characters/${characterId}/series?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`)
      .reply(200, seriesList);

    await runSaga({ dispatch }, fetchCharacterSeries, { characterId }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(fetchCharacterSeriesSuccess(seriesList));
  });

  test('should to fetch characters list filtered', async () => {
    const dispatch = jest.fn();
    const characterName = 'wolv';

    axiosMocked
      .onGet(`/characters?nameStartsWith=${characterName}&apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`)
      .reply(200, charactersFiltered);

    await runSaga({ dispatch }, fetchCharacters, { characterName }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(fetchCharactersSuccess(charactersFiltered));
  });
});
