import React from "react";
import {
  Container,
  Typography,
  UserInput,
  PassInput,
  SubmitButton,
} from "../Styling/LoginStyles";

const Login = ({
  getUser,
  getPassword,
  getAuth,
  registered,
  setRegistered,
  signup,
  user,
  password,
}) => {
  return (
    <Container>
      {registered ? (
        <>
          <Typography>SIGN-IN TO GET STARTED</Typography>
          <form
            style={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "space-around",
              alignItems: "center",
              height: "300px",
            }}
            onSubmit={getAuth}
          >
            <UserInput onChange={getUser} placeholder="User Name" />
            <PassInput
              onChange={getPassword}
              placeholder="Password"
              type="password"
            />
            <SubmitButton type="submit">Go Ahea-</SubmitButton>
            <span>
              Don't have an account? please{" "}
              <span
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => setRegistered(!registered)}
              >
                register
              </span>
            </span>
          </form>
        </>
      ) : (
        <>
          <Typography>Please Register</Typography>
          <form
            style={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "space-around",
              alignItems: "center",
              height: "300px",
            }}
            onSubmit={(e) => signup(e, user, password)}
          >
            <UserInput onChange={getUser} placeholder="User Name" />
            <PassInput
              onChange={getPassword}
              placeholder="Password"
              type="password"
            />
            <SubmitButton type="submit">Register</SubmitButton>
            <span>
              Already have an account? please{" "}
              <span
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => setRegistered(!registered)}
              >
                sign in
              </span>
            </span>
          </form>
        </>
      )}
    </Container>
  );
};

export default Login;
