import React from "react";
import { Card } from "../Styling/Card";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-around;
  width: 80vw;
  min-height: 80vh;
`;

const RandomGiph = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const Home = ({ giph, randomGiph, AddToFavoriteClickFromSearch, children }) => {
  return (
    <Main>
      {children}
      {!giph ? (
        <RandomGiph>
          Random Gliphy Yo!
          <img src={randomGiph?.images.original.url} alt="" />
        </RandomGiph>
      ) : (
        giph.map((gif, index) => (
          <Card onClick={() => AddToFavoriteClickFromSearch(index)} key={index}>
            <img src={gif.images.fixed_height.url} alt="" />
          </Card>
        ))
      )}
    </Main>
  );
};

export default Home;
