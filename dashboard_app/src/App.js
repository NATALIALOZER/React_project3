import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { auth } from "../src/store/actions/user";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PageLayout from "./layouts/PageLayout/PageLayout";
import Auth from "./pages/Auth/Auth";

import "./App.scss";


function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={isAuth ? <PageLayout /> : <Auth />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;