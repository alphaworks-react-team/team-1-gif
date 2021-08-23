import React from "react";
import styled from "styled-components";

const Container = (props) => {
  const Container = styled.div`
    border: 2px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;
    width: 60vw;
    height: 100%;
  `;

  return <Container>{props.children}</Container>;
};

export default Container;
