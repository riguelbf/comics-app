import { runSaga } from 'redux-saga';
import { fetchCharacters } from '../../../store/modules/character/sagas';
import { fetchCharactersSuccess } from '../../../store/modules/character/actions';

import { API_KEY, HASH, TIME_STAMP } from '../../../config';

import { axiosMock } from '../../helpers/axiosMock';
import characters from '../../stubs/characters.data.result.json';

describe('Character sagas', () => {
  test('should to fetch characters list', async () => {
    const dispatch = jest.fn();
    axiosMock.onGet(`/characters?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`).reply(200, characters);

    await runSaga({ dispatch }, fetchCharacters).toPromise();

    expect(dispatch).toHaveBeenCalledWith(fetchCharactersSuccess(characters));
  });
});
