import { Types } from './actions';

const INITIAL_STATE = {
  isLoading: false
};

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOADING_START:
    case Types.LOADING_END:
      return {
        ...state,
        isLoading: action.isLoading
      };

    default:
      return state;
  }
}
