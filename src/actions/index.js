import axios from "axios";
import { API_KEY } from "../../api";

const ROOT_URL = `https://wordsapiv1.p.mashape.com/words/`;

export const FETCH_WORD = "FETCH_WORD";
export const FETCH_WORD_ERROR = "FETCH_WORD_ERROR";

export function fetchWord(word) {
  const url = ROOT_URL + word;

  const request = axios.get(url, {
    headers: {
      "X-Mashape-Key": API_KEY
    }
  });

  return dispatch => {
    request
      .then(({ data }) => {
        dispatch({ type: FETCH_WORD, payload: data });
      })
      .catch(error => {
        dispatch({ type: FETCH_WORD_ERROR, payload: error });
      });
  };
}
