import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-bottom: 5rem;
`;

export const Box = styled.form`
  height: 45px;
  width: 400px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 3rem; */
  margin-top: 5rem;
  @media (max-width: 600px) {
    width: 85%;
  }
`;

export const SearchBar = styled.input.attrs({ id: "searchInput" })`
  margin: 0;
  padding: 0;
  height: 45px;
  width: 300px;
  outline: none;
  border: none;
  background: none;
  font-size: 25px;
  @media (max-width: 600px) {
    width: 85%;
    padding-left: 1rem;
  }
`;

export const Button = styled.button`
  color: white;
  height: 45px;
  width: 60px;
  font-size: 30px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 600px) {
    width: 85%;
  }
`;