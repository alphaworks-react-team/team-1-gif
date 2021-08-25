import React from "react";
import Container from "./Container";
import { Card } from "../Styling/Card";
import CarouselTest from "../test/CarouselTest";

const TrendingPage = ({ trending, giph, categories, search }) => {
  return (
    <Container>
      {giph && (
        <CarouselTest>
          <h3 style={{ margin: "0", paddingLeft: "10px", color: "white" }}>
            You searched "{search}"
          </h3>
          <div>
            {giph &&
              giph.map((gif, index) => (
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px",
                  }}
                  key={index}
                >
                  <img src={gif.images.fixed_height.url} alt="" />
                </div>
              ))}
          </div>
        </CarouselTest>
      )}
      <CarouselTest title="Trending">
        <h3 style={{ margin: "0", paddingLeft: "10px", color: "white" }}>
          Trending
        </h3>
        <div>
          {trending &&
            trending.map((gif, index) => (
              <div
                style={{
                  display: "inline-block",
                  padding: "10px",
                }}
                key={index}
              >
                <img src={gif.images.fixed_height.url} alt="" />
              </div>
            ))}
        </div>
      </CarouselTest>
      <CarouselTest>
        <h3 style={{ margin: "0", paddingLeft: "10px", color: "white" }}>
          Categories
        </h3>
        <div>
          {categories &&
            categories.map((gif, index) => (
              <div
                style={{
                  display: "inline-block",
                  padding: "10px",
                }}
                key={index}
              >
                <h4 style={{ margin: 0 }}>{gif.name}</h4>
                <img src={gif.gif.images.fixed_height.url} alt="" />
              </div>
            ))}
        </div>
      </CarouselTest>
      {/* {!giph ? (
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
        )} */}
    </Container>
  );
};

export default TrendingPage;
