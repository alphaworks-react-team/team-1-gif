import React from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 10;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgb(51, 51, 51, 0.8);
  background-cover: fill;

  @media (max-width: 600px) {
    width: 100%;
  }

`;

const Text = styled.div`
  width: 40rem;
  color: red;
  font-size: 40px;
  text-align: center;
  padding-bottom: 25rem;

  @media (max-width: 600px) {
    width: 60%;
    font-size: medium;
    font-weight: bold;
  }

`;

const Card = styled.div`
  padding-bottom: 5rem;

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const AuthModal = (props) => {
  return (
    <Container onClick={() => props.setAuthErr(false)}>
      <Card>
        <img
          src="https://media.giphy.com/media/vyTnNTrs3wqQ0UIvwE/giphy.gif"
          alt="Icon"
        />
      </Card>
      <Text>INCORRECT LOG-IN/PASSWORD PLEASE TRY AGAIN</Text>
    </Container>
  );
};

export default AuthModal;
