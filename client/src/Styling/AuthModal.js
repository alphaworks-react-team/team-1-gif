import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 400px;
width: 400px;

z-index: 5;

top: 100;
position: absolute;
`

const AuthModal = () => {
  return (
    <Container>
      <img src='https://media.giphy.com/media/vyTnNTrs3wqQ0UIvwE/giphy.gif' />
    </Container>
  );
}

export default AuthModal
