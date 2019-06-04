import React from "react";

import styled from "styled-components";

const AlignContainer = styled.div`
  width: 100%;
`;

const Loader = () => {
  return (
    <AlignContainer>
      <div class="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </AlignContainer>
  );
};

export default Loader;
