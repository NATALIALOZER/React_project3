import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { fetchLoginData } from "../../../redux/slices/auth";

import { toast } from "react-toastify";

import "./Login.scss";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeButton } from "../../../styles/themes/CustomButton/ThemeCustomButton";
import { themeTextaria } from "../../../styles/themes/CustomTextaria/ThemeCustomTextaria";


const Login = () => {

  const { 
    register, 
    handleSubmit, 
    setError, 
    formState: { errors, isValid } 
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    } ,
    mode: 'all'
  });

  const dispatch = useDispatch();
  
  const onSubmit = async (values) => {
    const data = await dispatch(fetchLoginData(values));
    if (data.payload && 'token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
      window.localStorage.setItem('userId', data.payload._id);
    } else {
      toast('Error on auth proccess');     
    }
  };
  return (
    <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
      <ThemeProvider theme={themeTextaria}>
        <TextField
          label="Email"
          type='email'
          className="text-field"
          helperText={errors.email?.message}
          error={Boolean(errors.email?.message)}
          {...register('email', {required: 'Type your email'})}
          autoFocus
          fullWidth
        ></TextField>
        
        <TextField
          label="Password"
          type="password"
          className="text-field"
          helperText={errors.password?.message}
          error={Boolean(errors.password?.message)}
          {...register('password', {required: 'Type your password'})}
          fullWidth
        ></TextField>
      </ThemeProvider>

      <ThemeProvider theme={themeButton}>
        <Button className="Auth-button button" type="submit">Log In</Button>
      </ThemeProvider>
    </form>
  );
};

export default Login;