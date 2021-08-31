import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 425px;
  width: 425px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  margin-top: 5rem;
  top: 100;
  position: absolute;
`;

const AuthModal = () => {
  return (
    <Container>
      <img src='https://media.giphy.com/media/vyTnNTrs3wqQ0UIvwE/giphy.gif' />
    </Container>
  );
}

export default AuthModal
