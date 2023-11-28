import "./App.scss";
// import { useEffect } from "react";
import PageLayout from "./layouts/PageLayout/PageLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Auth from "./components/pages/Auth/Auth";
// import { auth } from "../src/actions/user";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  // const isAuth = useSelector((state) => state.user.isAuth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(auth());
  // }, []);

  return (
    <div className="App">
      { <BrowserRouter>
        <Routes>
          {/* <Route
            path="/auth"
            element={isAuth ? <Navigate to="/" /> : <Auth />}
          /> */}
          <Route
            path="/"
            element={<PageLayout />}
          />
        </Routes>
      </BrowserRouter>
      /*<ToastContainer /> */
      }
    </div>
  );
}

export default App;