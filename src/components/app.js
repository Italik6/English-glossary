import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WordData from '../containers/word_data';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WordData />
      </div>
    );
  }
}