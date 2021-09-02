import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 425px;
  width: 425px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-bottom: 5rem;
  margin-top: 5rem;
`;

export const Typography = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
`;

export const Textbox = styled.input`
  margin: 0;
  padding: 0;
  width: 50%;
  height: 50px;
  font-size: 35px;
  background: none;
  border-bottom: 3px solid rgb(48, 48, 48, 0.3);
  outline: none;
  margin: none;
  padding: none;
  text-align: center;

  &:hover {
    background: rgb(255, 255, 255, 0.2);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 3px solid rgb(48, 48, 48);
    transition: all 0.5s ease;
  }
`;

export const SubmitButton = styled.button`
  margin: 0;
  padding: 0;
  height: 45px;
  width: 100px;
  /* font-size: 30px; */
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-weight: bold;
`;