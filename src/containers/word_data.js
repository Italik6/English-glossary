import React, { Component } from "react";
import { connect } from "react-redux";
import Alert from "../components/alert";

class WordData extends Component {
  render() {
    return (
      <div>
        {this.props.wordError.isVisible ? (
          <Alert alertInfo={this.props.wordError.alertInfo} />
        ) : (
          <p>{this.props.wordData.word}</p>
        )}
      </div>
    );
  }
}

function mapStateToProps({ wordData, wordError }) {
  return { wordData, wordError };
}

export default connect(mapStateToProps)(WordData);
