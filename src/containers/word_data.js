import React, { Component } from "react";
import { connect } from "react-redux";
import Alert from "../components/alert";

class WordData extends Component {
  render() {
    return (
      <div>
        {this.props.isVisible.isVisible ? (
          <Alert alertInfo={this.props.isVisible.alertInfo} />
        ) : null}

        <p>{this.props.word.word}</p>
      </div>
    );
  }
}

function mapStateToProps({ word, isVisible, alertInfo }) {
  return { word, isVisible, alertInfo };
}

export default connect(mapStateToProps)(WordData);
