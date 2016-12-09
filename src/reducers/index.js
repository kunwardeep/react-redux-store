import {combineReducers} from 'redux';
import courses from './courseReducer';
import numbers from './numbersReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  courses,
  numbers,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
