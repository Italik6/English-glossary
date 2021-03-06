import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWord } from "../actions/index";

const searchStyle = {
  marginTop: "20px",
  marginBottom: "20px"
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchWord(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group"
        style={searchStyle}
      >
        <input
          placeholder="Search word"
          value={this.state.term}
          className="form-control"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWord }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
