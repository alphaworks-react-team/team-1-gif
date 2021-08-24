import React from "react";
import styled from "styled-components";

const Container = (props) => {
  
  const Container = styled.div`
    border: 2px solid red;
    display: flex;
    flex-flow: row wrap;
    margin: 0 2rem 0 2rem;
  `;

  return <Container>{props.children}</Container>;
};

export default Container;
