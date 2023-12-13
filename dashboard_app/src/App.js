import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth, selectAuthCheckState } from "./redux/slices/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PageLayout from "./layouts/PageLayout/PageLayout";
import Tasks from "./pages/Tasks/Tasks";
import Auth from "./pages/Auth/Auth";

import "./App.scss";


function App() {
  const dispatch = useDispatch();
  const authCheck = useSelector(selectAuthCheckState);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuth())
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {authCheck !== 'loaded' ? 'Loading...' : <>
            <Route
              path="/"
              element={isAuth ? <PageLayout /> : <Auth />}
            />
            <Route
              path="/auth"
              element={<Auth />}
            />
          </>}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;