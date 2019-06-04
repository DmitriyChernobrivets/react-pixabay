import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Loader from "./Loader";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";

const ListContainer = styled.div`
  font-size: 18px;
  padding: 50px 20px;
  font-family: "Lato", sans-serif;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

class ItemList extends Component {
  static propTypes = {
    pictures: PropTypes.array.isRequired
  };

  loadFunc = page => {
    const { loadMore } = this.props;
    loadMore(page);
  };
  render() {
    const { pictures } = this.props;

    const items = pictures && pictures.map(picture => <Card picture={picture} key={picture.id} />);
    return (
      <InfiniteScroll
        pageStart={1}
        loadMore={this.loadFunc}
        hasMore
        loader={
          <div className="loader" key={0}>
            <Loader />
          </div>
        }
      >
        <ListContainer>{items}</ListContainer>
      </InfiniteScroll>
    );
  }
}
export default ItemList;
