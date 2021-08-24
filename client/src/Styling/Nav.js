import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 13vh;

background: black;
z-index: 2;

display: flex;
justify-content: center;
align-items: center;

top: 0;
position: sticky;
`

const Text = styled.div`
  color: white;
  font-size: 5rem;
  font-family: 'Monoton', cursive;
`;

const Nav = (props) => {
  return (
    <Container>
      {props.children}
      <Text>GLIZZY APP</Text>
    </Container>
  )
}

export default Nav
