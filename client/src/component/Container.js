import React from "react";
import styled from "styled-components";

const Container = (props) => {
  
  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 0 10rem 0 10rem;
  `;

  return <Container>{props.children}</Container>;
};

export default Container;
