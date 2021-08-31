import React from "react";
import { Card } from "../Styling/Card";
import { RiHeartLine } from "react-icons/ri";
import { Container, Text,RandomGiph } from "../Styling/HomeStyles";

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
