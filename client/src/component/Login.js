import React from 'react';
import { Container, Typography, Textbox, SubmitButton} from '../Styling/LoginStyles';

const Login = ({ getUser, getPassword, getAuth, children }) => {
  return (
    <Container onSubmit={getAuth}>
      <Typography>SIGN-IN TO GET STARTED</Typography>
      <Textbox onChange={getUser} placeholder='User Name' />
      <Textbox onChange={getPassword} placeholder='Password' type='password' />
      <SubmitButton type='submit'>Go Ahea-</SubmitButton>
      {children}
    </Container>
  );
};

export default Login;
