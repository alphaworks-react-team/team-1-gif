import React from "react";
import Container from "./Container";
import CarouselTest from "../test/CarouselTest";
import { RiHeartLine } from "react-icons/ri";

const TrendingPage = ({
  trending,
  categories,
  onClick,
  category,
  AddToFavoriteClick,
}) => {
  return (
    <Container>
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
                onClick={() => AddToFavoriteClick(index)}
              >
                <img src={gif.images.fixed_height.url} alt="" />
                <RiHeartLine
                  style={{
                    fill: "red",
                    transform: "translateX(-35px)",
                  }}
                  size="2em"
                />
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
                onClick={(e) => onClick(e, gif.name)}
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
      {category && (
        <CarouselTest>
          <div>
            {category &&
              category.map((gif, index) => (
                <div
                  onClick={(e) => onClick(e, gif.name)}
                  style={{
                    display: "inline-block",
                    padding: "10px",
                  }}
                  key={index}
                >
                  <h4 style={{ margin: 0 }}>{}</h4>
                  <img src={gif.images.fixed_height.url} alt="" />
                  <RiHeartLine
                    style={{
                      fill: "red",
                      transform: "translateX(-35px)",
                    }}
                    size="2em"
                  />
                </div>
              ))}
          </div>
        </CarouselTest>
      )}
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
