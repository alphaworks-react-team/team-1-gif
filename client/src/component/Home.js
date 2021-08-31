import React from "react";
import { Card } from "../Styling/Card";
import styled from "styled-components";
import { RiHeartLine } from "react-icons/ri";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  align-content: space-around;
  width: 80vw;
  min-height: 80vh;
`;

const Text = styled.div`
  width: 40rem;
  color: white;
  font-size: 40px;
  text-align: center;

  padding-bottom: 5rem;
`;

const RandomGiph = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const Home = ({
  giph,
  randomGiph,
  AddToFavoriteClickFromSearch,
  children,
  error,
}) => {
  return (
    <Container>
      {children}

      {!giph ? (
        <RandomGiph>
          <Text>Random Gliphy Yo!</Text>
          <img src={randomGiph?.images.original.url} alt="" />
        </RandomGiph>
      ) : (
        giph.map((gif, index) => (
          <Card onClick={() => AddToFavoriteClickFromSearch(index)} key={index}>
            <img src={gif.images.fixed_height.url} alt="" />
            <RiHeartLine
              style={{
                fill: "red",
                transform: "translateX(-35px)",
              }}
              onClick={(e) => {
                e.target.style.fill = "#FF67E7";
              }}
              size="2em"
            />
          </Card>
        ))
      )}
    </Container>
  );
};

export default Home;
