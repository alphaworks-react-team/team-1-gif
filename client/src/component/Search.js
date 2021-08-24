import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 50px;
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: green;
`;
const SearchBar = styled.input`
  margin: 0;
  padding: 0;

  height: 35px;
  width: 120px;

  outline: none;
`;
const Button = styled.button`
  height: 35px;
  width: 40px;

  cursor: pointer;
`;

const Search = props => {
  return (
    <Box>
      <SearchBar onChange={props.onChange}>{props.children}</SearchBar>
      <Button onClick={props.onClick}>{props.children}</Button>
    </Box>
  );
};

export default Search;
