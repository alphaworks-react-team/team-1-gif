import React from "react";
import styled from "styled-components";

const Scroll = styled.div`
  background-color: #333;
  display: flex;
  flex-direction: column;
  overflow: overlay;
  white-space: nowrap;
  width: 80%;
  // glass effect
  background: rgba(255, 255, 255, 0.25);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 10px;
  margin-bottom: 20px;
  ::-webkit-scrollbar {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    max-width: 10px;
  }
`;

const Title = styled.h4`
  position: fixed;
  margin: 0;
  color: white;
  margin-left: 10px;
`;

const CarouselTest = (props) => {
  return (
    <Scroll>
      {/* <Title>{props.title}</Title> */}
      {props.children}
    </Scroll>
  );
};

export default CarouselTest;
