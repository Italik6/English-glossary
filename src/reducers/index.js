import { combineReducers } from 'redux';
import WordReducer from './reducer_word';
import AlertReducer from './reducer_alert';
import RhymesReducer from './reducer_rhymes';

const rootReducer = combineReducers({
  wordData: WordReducer,
  wordError: AlertReducer,
  wordRhymes: RhymesReducer
});

export default rootReducer;