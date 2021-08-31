import React from "react";
import Container from "./Container";
import CarouselTest from "../test/CarouselTest";
import { RiHeartLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;

  z-index: 1;

  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;

  position: absolute;

  background-color: rgb(51, 51, 51, 0.8);
  padding-bottom: 5rem;
`;

const Modal = styled.div`
  background: black;
  color: white;

  z-index: 1;
  position: absolute;

  transform: translate(0rem, -15rem);
  border-radius: 25px;
`;

const CancelBox = styled.div`
  height: 30px;
  width: 400px;
  font-size: 2rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 1rem;
  margin-left: -1rem;
`;

const CancelIcon = styled.div`
  height: 30px;
  width: 30px;

  cursor: pointer;

  :hover {
    color: #ff67e7;
  }
`;

const LinkBox = styled.div`
  height: 270px;
  width: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkTag = styled.div`
  font-size: 35px;
  color: white;

  :hover {
    color: #ff67e7;
  }
`;

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
                </div>
              ))}
          </div>
        </CarouselTest>
      )}
    </Container>
  );
};

export default TrendingPage;
