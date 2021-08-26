import React from "react";
import Container from "./Container";
import { Card } from "../Styling/Card";
import Search from "./Search";

const Home = ({ giph, children }) => {
  return (
    <Container>
      {children}
      {giph &&
        giph.map((gif, index) => (
          <Card key={index}>
            <img src={gif.images.fixed_height.url} alt="" />
          </Card>
        ))}
    </Container>
  );
};

export default Home;
