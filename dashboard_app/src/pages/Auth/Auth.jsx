import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { login, registration } from "../../store/actions/user";

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import "./Auth.scss";

const Auth = () => {
  const [isNewUser, setUserType] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="Auth">
      <div className="auth-block">
        <h2>Authentication</h2>
        <span>
          Press your login and password to enter the App or create new account.
        </span>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          className="text-field"
        ></TextField>
        <TextField
          margin="dense"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          className="text-field"
        ></TextField>
        {isNewUser ? (
          <TextField
            margin="dense"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            className="text-field"
          ></TextField>
        ) : (
          ""
        )}
        <div className="actions-container">
          <Button className="Button" onClick={() => setUserType(!isNewUser)}>
            {isNewUser ? (
              <span>Move to Log In</span>
            ) : (
              <span>Create Account</span>
            )}
          </Button>
          {isNewUser ? (
            <Button
              className="Button"
              onClick={() => registration(email, password, username, isNewUser)}
            >
              Create
            </Button>
          ) : (
            <Button
              className="Button"
              onClick={() => dispatch(login(email, password))}
            >
              Log In
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;