import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Like } from "styled-icons/boxicons-solid/Like";
import { Heart } from "styled-icons/boxicons-solid/Heart";

const ImageTag = styled.p`
  opacity: 0;
  text-align: center;
  transition: 0.5s linear;
  transform: translateY(-22px);
  &:after {
    display: block;
    transition: 0.5s linear;
    content: "";
    opacity: 0;
    transform: scale(0);
    width: 50px;
    height: 2px;
    background-color: #fff;
    margin: 10px auto;
  }
`;
const ImageAuthor = styled.p`
  opacity: 0;
  transform: translateY(22px);
  transition: 0.5s linear;
`;
const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  box-shadow: inset 0 0 30px 15px rgba(0, 0, 0, 0.4);
  :hover {
    transition: 0.3s ease-in-out;
    opacity: 1;
    cursor: pointer;
    ${ImageAuthor} {
      opacity: 1;
      transition: 0.5s linear;
      transform: translateY(0);
    }
    ${ImageTag} {
      opacity: 1;
      transition: 0.5s linear;
      transform: translateY(0);
    }
    ${ImageTag}:after {
      opacity: 1;
      transition: 0.5s linear;
      transform: scale(1.3);
    }
  }
`;
const LikeIcon = styled(Like)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  left: 20px;
`;
const HeartIcon = styled(Heart)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

class ImageContent extends Component {
  static propTypes = {
    tags: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  };

  render() {
    const { tags, user, likes } = this.props;
    return (
      <Container>
        <LikeIcon>{likes}</LikeIcon>

        <HeartIcon />
        <ImageTag>{tags}</ImageTag>
        <ImageAuthor>{user}</ImageAuthor>
      </Container>
    );
  }
}

export default ImageContent;
