import React from "react";
import styled from "styled-components";

const Scroll = styled.div`
  background-color: #333;
  display: flex;
  flex-direction: column;
  overflow: overlay;
  white-space: nowrap;
  width: 80vw;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 10px;
  margin-top: 20px;
  ::-webkit-scrollbar {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    max-width: 10px;
  }
`;

const CarouselTest = ({ children }) => {
  return <Scroll>{children}</Scroll>;
};

export default CarouselTest;
