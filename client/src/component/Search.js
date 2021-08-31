import React from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-bottom: 5rem;
`;

const Box = styled.form`
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
<<<<<<< HEAD
  margin-bottom: 5rem;
=======
  /* margin-bottom: 3rem; */
>>>>>>> b7f316fd1e8db42b7b4adcb0169a232d619cabf4
  margin-top: 5rem;
  @media (max-width: 600px) {
    width: 85%;
  }
`;

const SearchBar = styled.input.attrs({ id: "searchInput" })`
  margin: 0;
  padding: 0;
  height: 45px;
  width: 300px;
  outline: none;
  border: none;
  background: none;
  font-size: 25px;
  @media (max-width: 600px) {
    width: 85%;
    padding-left: 1rem;
  }
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
  @media (max-width: 600px) {
    width: 85%;
  }
`;

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
