import {combineReducers} from 'redux';
import courses from './courseReducer';
import numbers from './numbersReducer';
import authors from './authorReducer';


const rootReducer = combineReducers({
  courses,
  numbers,
  authors
});

export default rootReducer;
