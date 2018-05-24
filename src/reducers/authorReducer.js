import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authors(state = initialState.authors, action) {
  console.log("authorReducer authors");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
