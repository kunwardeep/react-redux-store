import {combineReducers} from 'redux';
import courses from './courseReducer';
import numbers from './numbersReducer';


const rootReducer = combineReducers({
  courses,
  numbers
});

export default rootReducer;
