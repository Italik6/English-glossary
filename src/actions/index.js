import axios from "axios";
import { API_KEY } from "../../api";

const ROOT_URL = `https://wordsapiv1.p.mashape.com/words/`;

export const FETCH_WORD = "FETCH_WORD";
export const FETCH_WORD_ERROR = "FETCH_WORD_ERROR";
export const FETCH_RHYMES = "FETCH_RHYMES";

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

export function fetchRhymes(word) {
  const url = `${ROOT_URL}${word}/rhymes`;

  const request = axios.get(url, {
    headers: {
      "X-Mashape-Key": API_KEY
    }
  });

  return dispatch => {
    request
      .then(({ data }) => {
        dispatch({ type: FETCH_RHYMES, payload: data });
      })
      .catch(error => {
        alert("Sorry, something went wrong. Please, try again later.");
      });
  };
}
