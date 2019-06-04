import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPictures } from "../store/actions/actions";
import Header from "./Header/Header";
import ItemList from "./Main/ItemList";

class App extends Component {
  static propTypes = {
    fetchPictures: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchPictures();
  }
  render() {
    const { items, fetchPictures } = this.props;

    return (
      <div className="App">
        <Header />
        {items && <ItemList pictures={items} loadMore={fetchPictures} />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.pictures.items
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPictures }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
