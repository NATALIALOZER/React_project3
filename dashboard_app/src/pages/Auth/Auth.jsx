import React, { useState } from "react";
import { Navigate } from 'react-router-dom';

import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";

import Login from "./Login/Login";
import Registration from "./Registration/Registration";

import "./Auth.scss";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeButton } from "../../styles/themes/CustomButton/ThemeCustomButton";


const Auth = () => {
  const isAuth = useSelector(selectIsAuth);
  
  const [isLoginPage, setIsLoginPage] = useState(true);

  if (isAuth) {
    return <Navigate to="/" />
  }

  const updatePageView = (state) => {
    setIsLoginPage(!state);
  }

  return (
    <div className="Auth">
      <div className="Auth-block">
        <div className="Auth-title title">{isLoginPage ? 'Sign in' : 'Create account'}</div>
        <span>
          Press your login and password to enter the App or create new account.
        </span>
        
        {isLoginPage ? <Login /> : <Registration />}

        <ThemeProvider theme={themeButton}>
          <Button className="Auth-button button" type="button" onClick={() => updatePageView(isLoginPage)}>
            {isLoginPage ? 'Sign up' : 'Back to login'} 
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Auth;