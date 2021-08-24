import React from 'react';
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

const Box = styled.div`
  height: 45px;
  width: 400px;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5rem;
  margin-top: 5rem;
`;
const SearchBar = styled.input`
  margin: 0;
  padding: 0;

  height: 45px;
  width: 300px;

  outline: none;
  border: none;
  background: none;
  font-size: 25px;
`;
const Button = styled.button`
  color: white;
  height: 45px;
  width: 60px;
  font-size: 30px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Search = props => {
  return (
    <Box>
      <SearchBar onChange={props.onChange}>{props.children}</SearchBar>
      <Button onClick={props.onClick}>
        {props.children}
        <BiSearchAlt />
      </Button>
    </Box>
  );
};

export default Search;
