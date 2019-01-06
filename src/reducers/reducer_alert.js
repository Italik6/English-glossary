import { FETCH_WORD, FETCH_WORD_ERROR } from '../actions/index';

const initialState = {
    isVisible: false,
}
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WORD:
            return { isVisible: false };
        case FETCH_WORD_ERROR: 
            return { isVisible: true, alertInfo: "Your word has not found." };
        }
    return state;
}