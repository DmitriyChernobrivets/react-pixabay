import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styled from "styled-components";

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
    pictures: PropTypes.array
  };

  render() {
    const { pictures } = this.props;
    console.log(pictures);
    return (
      <ListContainer>
        {pictures && pictures.map(picture => <Card picture={picture} key={picture.id} />)}
      </ListContainer>
    );
  }
}
export default ItemList;
