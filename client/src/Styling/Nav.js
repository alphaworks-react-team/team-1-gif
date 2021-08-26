import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgTrending, CgProfile } from "react-icons/cg";

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

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "blue" };
  } else {
    return { color: "red" };
  }
};

const Nav = () => {
  return (
    <Container>
      <Aside>
        <Link to={"/profile"}>
          <CgProfile size="3em" color="white" />
        </Link>
      </Aside>

      <Text>
        <Link to={"/"}>GIPHY APP</Link>
      </Text>
      <Aside>
        <Link to={"/trending"}>
          <CgTrending size="3em" color="white" />
        </Link>
      </Aside>
    </Container>
  );
};

export default Nav;
