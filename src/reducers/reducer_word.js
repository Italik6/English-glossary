import { FETCH_WORD, FETCH_WORD_ERROR } from '../actions/index';
import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WORD:
             return action.payload;
        case FETCH_WORD_ERROR:
             return state;
        }
    return state;
}