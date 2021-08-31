import React from "react";
import Container from "../Styling/Container";
import CarouselTest from "../test/CarouselTest";
import { RiHeartLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  ModalBackground,
  Modal,
  CancelBox,
  CancelIcon,
  LinkBox,
  LinkTag,
  HeartIcon,
} from "../Styling/TrendingStyles";

const TrendingPage = ({
  trending,
  categories,
  onClick,
  category,
  AddToFavoriteClick,
  AddToFavoriteClickFromCategory,
  displayModal,
  setDisplayModal,
}) => {
  return (
    <Container>
      {displayModal ? (
        <ModalBackground>
          <Modal>
            <CancelBox>
              <CancelIcon onClick={() => setDisplayModal(false)}>
                <MdCancel />
              </CancelIcon>
            </CancelBox>
            <LinkBox>
              <Link
                to={"/profile"}
                onClick={() => setDisplayModal(false)}
                style={{ textDecoration: "none" }}
              >
                <LinkTag>Log-in to like giphs</LinkTag>
              </Link>
            </LinkBox>
          </Modal>
        </ModalBackground>
      ) : null}
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
                <HeartIcon>
                  <RiHeartLine
                    onClick={(e) => {
                      e.target.style.background = "#FF67E7";
                      e.target.style.color = "white";
                    }}
                    size="2em"
                  />
                </HeartIcon>
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
                  onClick={(e) => AddToFavoriteClickFromCategory(index)}
                  style={{
                    display: "inline-block",
                    padding: "10px",
                  }}
                  key={index}
                >
                  <h4 style={{ margin: 0 }}>{}</h4>
                  <img src={gif.images.fixed_height.url} alt="" />
                  <HeartIcon>
                    <RiHeartLine
                      onClick={(e) => {
                        e.target.style.background = "#FF67E7";
                        e.target.style.color = "white";
                      }}
                      size="2em"
                    />
                  </HeartIcon>
                </div>
              ))}
          </div>
        </CarouselTest>
      )}
    </Container>
  );
};

export default TrendingPage;
