import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import {Container, Box, SearchBar, Button} from '../Styling/SearchStyles'

const Search = ({ error, onChange, onClick, children }) => {
  return (
    <Container>
      <Box>
        <SearchBar onChange={onChange} placeholder='Search GIF'>
          {children}
        </SearchBar>
        <Button onClick={onClick}>
          {children}
          <BiSearchAlt />
        </Button>
      </Box>
    </Container>
  );
};

export default Search;
