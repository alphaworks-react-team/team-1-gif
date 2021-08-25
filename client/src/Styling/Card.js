import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: inline-block;

  border-radius: 5px;
  /* background-color: #fff; */
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15); */
  /* -moz-box-shadow:    3px 3px 5px 6px black;
  -webkit-box-shadow: 3px 3px 5px 6px black; */
  /* box-shadow: 0px 0px 6px 1px black; */

  transition: all 0.3s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    /* width: 100%;
  height: 100%; */
    opacity: 0;
    border-radius: 5px;
    /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); */
    /* -moz-box-shadow: 3px 3px 5px 6px black;
    -webkit-box-shadow: 3px 3px 5px 6px black; */
    box-shadow: 0px 0px 0px 0px black;

    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.6, 1.6);
    z-index: 1;
    cursor: pointer;

    /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  }
  &:hover:after {
    opacity: -1;
  }
`;


