import React from 'react';
import { Card } from '../Styling/Card';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  align-content: space-around;
  width: 80vw;
  min-height: 80vh;
`;

const GiphContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5rem;
`;

const RandomGiph = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const Home = ({ giph, randomGiph, children }) => {
  return (
    <Container>
      {children}
      <GiphContainer>
        {!giph ? (
          <RandomGiph>
            Random Gliphy Yo!
            <img src={randomGiph?.images.original.url} alt='' />
          </RandomGiph>
        ) : (
          giph.map((gif, index) => (
            <Card key={index}>
              <img src={gif.images.fixed_height.url} alt='' />
            </Card>
          ))
        )}
      </GiphContainer>
    </Container>
  );
};

export default Home;
