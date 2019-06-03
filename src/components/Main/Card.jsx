import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import WitchTransition from "../../hocs/hocs";
// import ImageZoom from "react-medium-image-zoom";
import ImageContent from "./ImageContent";

const rotate = keyframes`
  from {
    opacity: 0;
    transform: translateY(22px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = WitchTransition(styled.div`
  margin: 0;
  position: relative;
  height: 250px;
  animation: ${rotate} 0.5s linear 1;
  transition: 0.5s;
  opacity: ${({ state }) => state === "entered" && 1};
`);

class Card extends Component {
  static propTypes = {
    picture: PropTypes.object
  };

  render() {
    const { largeImageURL, tags, user, likes } = this.props.picture;

    return (
      <Container>
        <img src={largeImageURL} alt="1" />

        <ImageContent tags={tags} user={user} likes={likes} />
      </Container>
    );
  }
}
export default Card;
