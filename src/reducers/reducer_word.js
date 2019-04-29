import { FETCH_WORD, FETCH_WORD_ERROR, FETCHING_WORD } from "../actions/index";

const initialState = {
  isFetching: false,
  wordData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_WORD:
      return { isFetching: true };
    case FETCH_WORD:
      return { isFetching: false, wordData: action.payload };
    case FETCH_WORD_ERROR:
      return state;
  }
  return state;
}
