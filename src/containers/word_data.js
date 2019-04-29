import React, { Component } from "react";
import { connect } from "react-redux";
import Alert from "../components/alert";
import Loader from "../components/loader";
import Definitions from "../components/definitions";
import Rhymes from "../components/rhymes";
import { fetchRhymes } from "../actions/index";
import { bindActionCreators } from "redux";

class WordData extends Component {
  onRhymesSubmit = event => {
    event.preventDefault();
    this.props.fetchRhymes(this.props.wordData.word);
  };

  render() {
    if (this.props.wordData.isFetching) {
      return <Loader loaderInfo="Loading your word..." />;
    }
    if (this.props.wordError.isVisible) {
      return <Alert alertInfo={this.props.wordError.alertInfo} />;
    } else {
      return (
        <div>
          <p>
            <b>{this.props.wordData.wordData.word}</b>
          </p>
          {this.props.wordData.wordData.length !== 0 ? (
            <Definitions definitions={this.props.wordData.wordData.results} />
          ) : null}
          {this.props.wordData.wordData.length !== 0 &&
          this.props.wordRhymes.rhymes === undefined ? (
            <button onClick={this.onRhymesSubmit} className="btn btn-secondary">
              Rhymes
            </button>
          ) : null}
          {this.props.wordRhymes.isFetching ? (
            <Loader loaderInfo="Loading rhymes..." />
          ) : null}
          {this.props.wordRhymes.rhymes !== undefined ? (
            <Rhymes rhymes={this.props.wordRhymes} />
          ) : null}
        </div>
      );
    }
  }
}

function mapStateToProps({ wordData, wordError, wordRhymes }) {
  return { wordData, wordError, wordRhymes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRhymes }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordData);
