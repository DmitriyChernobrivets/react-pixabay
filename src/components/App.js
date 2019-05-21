import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../store/actions/actions";

class App extends Component {
  onCl = () => {
    this.props.fetchData();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.onCl}>Click</button>
          {this.props.value.hits && <img src={this.props.value.hits[0].largeImageURL} />}
        </header>
      </div>
    );
  }
}
const state = state => {
  return {
    value: state.main.value
  };
};
const dipatcher = dispatch => bindActionCreators({ fetchData }, dispatch);

export default connect(
  state,
  dipatcher
)(App);
