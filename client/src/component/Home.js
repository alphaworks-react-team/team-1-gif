import React from 'react';
import { Card } from '../Styling/Card';
import styled from 'styled-components';
import { RiHeartLine } from "react-icons/ri";

const Main = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-around;

  width: 80vw;
  min-height: 80vh;
`;

const RandomGiph = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  font-size: 2rem;
  font-weight: bold;
`;

const Home = ({ giph, randomGiph, children, AddToFavoriteClick }) => {
  return (
    <Main>
      {children}
      {!giph ? (
        <RandomGiph>
          Random Gliphy Yo!
          <img src={randomGiph?.images.original.url} alt='' />
          
        </RandomGiph>
      ) : (
        giph.map((gif, index) => (
          <Card 
          key={index} 
          onClick={() => AddToFavoriteClick(index)} 
          >
            <img src={gif.images.fixed_height.url} alt='' />
            <RiHeartLine
            style={{
              fill: "red",
              transform: "translateX(-35px)",
            }}
            size="2em"
          />
          </Card>
        ))
      )}
    </Main>
  );
};

export default Home;
