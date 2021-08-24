import React from "react";
import styled from "styled-components";

const Scroll = styled.div`
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
  width: 80%;
`;

const Img = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
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
      <Title>{props.title}</Title>
      <Img>{props.children}</Img>
    </Scroll>
  );
};

export default CarouselTest;
