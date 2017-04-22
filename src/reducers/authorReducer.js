/**
 * Created by Cristian on 4/17/2017.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state =initialState.authors, action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
