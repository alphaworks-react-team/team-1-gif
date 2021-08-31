import styled from "styled-components";

export const ModalBackground = styled.div`
  z-index: 10;

  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;

  background-color: rgb(51, 51, 51, 0.8);
  background-cover: fill;
  // padding-bottom: 5rem;
`;

export const Modal = styled.div`
  background: black;
  color: white;
  z-index: 1;
  position: absolute;
  transform: translate(0rem, -15rem);
  border-radius: 25px;
`;

export const CancelBox = styled.div`
  height: 30px;
  width: 400px;
  font-size: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  margin-left: -1rem;
`;

export const CancelIcon = styled.div`
  height: 30px;
  width: 30px;
  cursor: pointer;
  :hover {
    color: #ff67e7;
  }
`;

export const LinkBox = styled.div`
  height: 270px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkTag = styled.div`
  font-size: 35px;
  color: white;
  :hover {
    color: #ff67e7;
  }
`;

export const HeartIcon = styled.div`
  height: 30px;
  width: 30px;
  color: #ff67e7;
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  transform: translateY(-35px);
  border-radius: 50% !important ;
  :hover {
    color: #ff67e7;
  }
`;
