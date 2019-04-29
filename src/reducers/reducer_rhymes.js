import { FETCH_RHYMES, FETCHING_RHYMES } from "../actions/index";

const initialState = {
  isFetching: false,
  wordRhymes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_RHYMES:
      return { isFetching: true };
    case FETCH_RHYMES:
      return action.payload;
  }
  return [];
}
