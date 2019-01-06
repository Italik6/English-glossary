import { combineReducers } from 'redux';
import WordReducer from './reducer_word';
import AlertReducer from './reducer_alert';

const rootReducer = combineReducers({
  word: WordReducer,
  isVisible: AlertReducer
});

export default rootReducer;