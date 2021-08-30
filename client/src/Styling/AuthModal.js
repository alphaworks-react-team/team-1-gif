import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  z-index: 1;

  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;

  top: 10;
  position: absolute;

  background-color: rgb(51, 51, 51, 0.8);
`;

const Text = styled.div`
  width: 40rem;
  color: red;
  font-size: 40px;
  text-align: center;

  padding-bottom: 25rem;
`;

const Card = styled.div`
  padding-bottom: 5rem;
`;

const AuthModal = props => {
  return (
    <Container onClick={() => props.setAuthErr(false)}>
      <Card>
        <img src='https://media.giphy.com/media/vyTnNTrs3wqQ0UIvwE/giphy.gif' />
      </Card>
      <Text>INCORRECT LOG-IN/PASSWORD PLEASE TRY AGAIN</Text>
    </Container>
  );
};

export default AuthModal;
