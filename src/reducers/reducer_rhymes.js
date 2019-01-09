import { FETCH_RHYMES } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RHYMES:
      return action.payload;
  }
  return state;
}
