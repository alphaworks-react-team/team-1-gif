import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  height: 200px;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;

    opacity: 0;
    border-radius: 5px;
    box-shadow: 0px 0px 0px 0px black;

    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.6, 1.6);
    z-index: 1;
    cursor: pointer;
  }
  &:hover:after {
    opacity: -1;
  }
`;
