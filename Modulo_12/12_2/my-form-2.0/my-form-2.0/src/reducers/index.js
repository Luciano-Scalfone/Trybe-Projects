import { ADD_VALUE } from '../action';

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
}

export default reducer;
