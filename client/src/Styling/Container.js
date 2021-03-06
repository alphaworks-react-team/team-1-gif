import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
  min-height: 100vh;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default Container;
