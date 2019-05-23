import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import ImageZoom from "react-medium-image-zoom";
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

const Container = styled.div`
  margin: 0;
  position: relative;
  height: 250px;
  animation: ${rotate} 0.5s linear 1;
`;

class Card extends Component {
  static propTypes = {
    picture: PropTypes.object
  };

  render() {
    const { largeImageURL, tags, user, likes } = this.props.picture;

    return (
      <Container bgimage={largeImageURL}>
        <img src={largeImageURL} alt="1" />
        {/* <ImageZoom
          image={{
            src: largeImageURL,
            alt: "Golden Gate Bridge",
            style: { height: "200px", cursor: "pointer" }
          }}
          zoomImage={{
            src: largeImageURL,
            alt: "Golden Gate Bridge"
          }}
        /> */}
        <ImageContent tags={tags} user={user} likes={likes} />
      </Container>
    );
  }
}
export default Card;
