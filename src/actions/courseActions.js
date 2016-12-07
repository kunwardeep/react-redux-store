import * as types from './actionTypes';

export function createCourse(course){
  return {type:types.CREATE_COURSE,course};
}

export function addNumbers(numbers){
  return {type:types.ADD_NUMBERS,numbers};
}
