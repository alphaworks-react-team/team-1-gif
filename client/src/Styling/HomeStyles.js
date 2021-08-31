import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  align-content: space-around;
  width: 80vw;
  min-height: 80vh;
`;

export const Text = styled.div`
  width: 40rem;
  color: white;
  font-size: 40px;
  text-align: center;

  padding-bottom: 5rem;
`;

export const RandomGiph = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;
