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
  font-size: 8vw;
  font-family: 'Monoton', cursive;

  display: flex;
  justify-content: center;

  background: linear-gradient(
    to right,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

const Nav = ({ history }) => {
  return (
    <Container>
      <Aside>
        <Link to={"/profile"}>
          <CgProfile size="3em" color="white" />
        </Link>
      </Aside>
      <Text>
        {/* <Link style={{ textDecoration: "none", color: "white" }} to={"/"}> */}
        <Link style={{ textDecoration: 'none' }} to={"/"}>
          GIPHY APP
        </Link>
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
