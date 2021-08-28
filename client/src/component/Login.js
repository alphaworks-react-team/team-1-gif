import React from 'react'
import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  height: 45px;
  width: 400px;

  margin-bottom: 5rem;
  margin-top: 5rem;
`;

const Typography = styled.div`
font-size: 60px;
`

const Textbox = styled.input`
  margin: 0;
  padding: 0;

  width: 50%;
  height: 35px;
  font-size: 40px;
  background: none;
  color: black;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 3px solid rgb(48, 48, 48, 0.3);
  outline: none;
  margin: none;
  padding: none;

  &:hover {
    background: rgb(255, 255, 255, 0.4);
    border-bottom: 3px solid rgb(48, 48, 48);
    transition: all 0.5s ease;
  }
`;

const SubmitButton = styled.button`
margin: 0;
padding: 0;

  height: 45px;
  width: 60px;
  /* font-size: 30px; */

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Login = ({ getUser, getPassword, getAuth, children }) => {
  return (
    <Container onSubmit={getAuth}>
      <Typography>SIGN IN TO GET STARTED</Typography>
      <div>
        <Textbox onChange={getUser} placeholder='user' />
        <Textbox
          onChange={getPassword}
          placeholder='password'
          type='password'
        />
      </div>
        <SubmitButton type='submit'>Go Ahea-</SubmitButton>
      {children}
    </Container>
  );
}

export default Login
