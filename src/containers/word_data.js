import React, { Component } from "react";
import { connect } from "react-redux";
import Alert from "../components/alert";
import Definitions from "../components/definitions";

class WordData extends Component {
  render() {
    if (this.props.wordError.isVisible) {
      return <Alert alertInfo={this.props.wordError.alertInfo} />;
    } else {
      return (
        <div>
          <p>{this.props.wordData.word}</p>
          {this.props.wordData.length !== 0 ? (
            <Definitions definitions={this.props.wordData.results} />
          ) : null}
        </div>
      );
    }
  }
}

function mapStateToProps({ wordData, wordError }) {
  return { wordData, wordError };
}

export default connect(mapStateToProps)(WordData);
