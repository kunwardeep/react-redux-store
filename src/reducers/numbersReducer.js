import * as types from '../actions/actionTypes';

export default function numbersReducer(state=[],action) {
  switch(action.type){
    case types.ADD_NUMBERS:
      return [...state, Object.assign({},action.numbers)];
    default:
      return state;
  }
}
