import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 15%;

  background: black;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  position: sticky;
`;

const Text = styled.div`
  width: 65vw;
  color: white;
  font-size: 8vw;
  font-family: "Monoton", cursive;

  display: flex;
  justify-content: center;
`;

const Aside = styled.div`
  width: 22.5vw;

  display: flex;
  justify-content: center;
  color: white;
`;

const Nav = (props) => {
  return (
    <Container>
      <Aside>
        <Link to={"/"}>Home</Link>
      </Aside>
      <Text>GIPHY APP</Text>
      {props.children}
      <Aside>
        <Link to={"/trending"}>Trending</Link>
      </Aside>
    </Container>
  );
};

export default Nav;
