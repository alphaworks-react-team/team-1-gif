import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { CgTrending, CgProfile } from 'react-icons/cg';

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
`;

const Text = styled.div`
  width: 65vw;
  font-size: 8vw;
  font-family: 'Monoton', cursive;

  display: flex;
  justify-content: center;

  background: linear-gradient(
    to right,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Aside = styled.div`
  width: 22.5vw;

  display: flex;
  justify-content: center;
  color: white;
`;

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#FF67E7', textDecoration: 'none' };
  } else {
    return { color: 'white', textDecoration: 'none' };
  }
};

const Nav = ({ history }) => {
  return (
    <Container>
      <Aside>
        <Link to={'/profile'} style={isActive(history, '/profile')}>
          <CgProfile
            style={isActive(history, '/profile')}
            size='3em'
            color='white'
          />
        </Link>
      </Aside>
      <Text>
        <Link style={isActive(history, '/')} to={'/'}>
          GIPHY APP
        </Link>
      </Text>
      <Aside>
        <Link to={'/trending'}>
          <CgTrending
            style={isActive(history, '/trending')}
            size='3em'
            color='white'
          />
        </Link>
      </Aside>
    </Container>
  );
};

export default withRouter(Nav);
