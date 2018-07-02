import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
// Combine reducers for use state on anywhere
const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
