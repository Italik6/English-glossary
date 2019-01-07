import { combineReducers } from 'redux';
import WordReducer from './reducer_word';
import AlertReducer from './reducer_alert';

const rootReducer = combineReducers({
  wordData: WordReducer,
  wordError: AlertReducer
});

export default rootReducer;