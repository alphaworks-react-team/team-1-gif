import React from "react";
import Container from "./Container";
import { Card } from "../Styling/Card";

const TrendingPage = ({ trending, giph }) => {
  return (
    <div>
      <Container>
        {!giph ? (
          <Container>
            {trending &&
              trending.map((gif, index) => (
                <Card key={index}>
                  <img src={gif.images.fixed_height.url} alt="" />
                </Card>
              ))}
          </Container>
        ) : (
          <Container>
            {giph &&
              giph.map((gif, index) => (
                <Card key={index}>
                  <img src={gif.images.fixed_height.url} alt="" />
                </Card>
              ))}
          </Container>
        )}
      </Container>
    </div>
  );
};

export default TrendingPage;
