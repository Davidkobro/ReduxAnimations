import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

//reducer is function that returns some amount of data
export default combineReducers({
  libraries: LibraryReducer
});
