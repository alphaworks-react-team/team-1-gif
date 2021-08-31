import React from "react";
import { Card } from "../Styling/Card";
import styled from "styled-components";
import { RiHeartLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

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

const ModalBackground = styled.div`
  z-index: 10;

  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;

  background-color: rgb(51, 51, 51, 0.8);
  background-cover: fill;
  // padding-bottom: 5rem;
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

const HeartIcon = styled.div`
  height: 30px;
  width: 30px;
  color: #ff67e7;
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  transform: translateY(-35px);
  border-radius: 50% !important ;
  :hover {
    color: #ff67e7;
  }
`;

const Home = ({
  giph,
  randomGiph,
  AddToFavoriteClickFromSearch,
  children,
  error,
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
            <HeartIcon>
              <RiHeartLine
                onClick={(e) => {
                  e.target.style.background = "#FF67E7";
                  e.target.style.color = "white";
                }}
                size="2em"
              />
            </HeartIcon>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Home;
