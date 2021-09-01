import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 0;
  float: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  color: black;
`;

const SearchError = (props) => {
  return (
    <Container>
      <Text>{props.children}</Text>
    </Container>
  );
};

export default SearchError;