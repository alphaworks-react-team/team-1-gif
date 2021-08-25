import React from 'react'
import styled from 'styled-components'

import Drop from './Drop'

const Container = styled.div`
width: 100vw;
height: 15%;

background: black;
z-index: 2;

display: flex;
justify-content: center;
align-items: center;

top: 0;
position: sticky;
`

const Text = styled.div`
width: 65vw;
  color: white;
  font-size: 8vw;
  font-family: 'Monoton', cursive;

  display: flex;
  justify-content: center;
`;

const Aside = styled.div`
  width: 22.5vw;

  display: flex;
  justify-content: center;
`;

const Nav = (props) => {
  return (
    <Container>
      <Aside>
        <Drop></Drop>
      </Aside>
      <Text>GLIZZY APP</Text>
      {props.children}
      <Aside></Aside>
    </Container>
  );
}

export default Nav
