import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../store/actions/actions";
import Header from "./Header/Header";
import ItemList from "./Main/ItemList";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const { items } = this.props;
    return (
      <div className="App">
        <Header />
        <ItemList pictures={items ? items.hits : null} />
      </div>
    );
  }
}
const state = state => {
  return {
    items: state.main.items
  };
};
const dipatcher = dispatch => bindActionCreators({ fetchData }, dispatch);

export default connect(
  state,
  dipatcher
)(App);
