import React from 'react'
import styled from 'styled-components'

const Textbox = styled.input`
height: 25px;
width: 150px;
`

const SubmitButton = styled.button`
  height: 65px;
  width: 65px;
`;

const Login = ({ getUser, getPassword, getAuth, children }) => {
  return (
    <form onSubmit={getAuth}>
      <Textbox onChange={getUser} placeholder='user' />
      <Textbox onChange={getPassword} placeholder='password' type='password' />
      <SubmitButton type='submit'>Submit</SubmitButton>
      {children}
    </form>
  );
}

export default Login
