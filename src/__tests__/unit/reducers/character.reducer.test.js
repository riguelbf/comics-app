import reducer, { INITIAL_STATE } from "../../../store/modules/character/reducer";
import * as  CharacterActions from '../../../store/modules/character/actions';
import characters from '../../stubs/characters.data.result.json';
import character from '../../stubs/character-detail-data-result.json';

describe('Character reducer', () => {
  test('should to get characters', () => {

    const state = reducer(INITIAL_STATE, CharacterActions.fetchCharactersSuccess(characters));

    expect(state.data).toStrictEqual(characters.data);
  });

  test('should tp add a selected character', () => {
    const state = reducer(INITIAL_STATE, CharacterActions.addSelectedCharacter(character));
    expect(state.selectedCharacter).toStrictEqual(character);
  });
});
