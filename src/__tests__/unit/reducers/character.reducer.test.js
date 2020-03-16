import reducer, { INITIAL_STATE } from "../../../store/modules/character/reducer";
import * as  CharacterActions from '../../../store/modules/character/actions'
import characters from '../../stubs/characters.data.result.json'

describe('Character reducer', () => {
  test('should to get characters', () => {

    const state = reducer(INITIAL_STATE, { type: CharacterActions.LOAD });

    expect(state).toStrictEqual(characters);
  });
});
