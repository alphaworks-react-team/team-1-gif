import React from "react";
import styled from "styled-components";

const Container = (props) => {
  
  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0 8rem 0 8rem;

    margin-bottom: 5rem;
  `;

  return <Container>{props.children}</Container>;
};

export default Container;
