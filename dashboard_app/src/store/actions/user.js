import axios from "axios";
import { setUser } from "../reducers/userReducer";

//toastify
import { toast } from "react-toastify";

const showNotify = (serverMessage) => toast(serverMessage);

export const registration = async (
  email,
  password,
  username,
  isRegistration
) => {
  await axios
    .post("http://localhost:4444/api/auth", {
      email,
      password,
      username,
      isRegistration,
    })
    .then((response) => showNotify(response.data.message))
    .catch((err) => {
      console.log(err);
      showNotify(err.response.data.message);
    });
};

export const login = (email, password) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:4444/api/auth", {
        email,
        password,
      })
      .then((response) => {
        dispatch(setUser(response.data.user));
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        console.log(err);
        showNotify(err.response.data.message);
      });
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4444/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
    }
  };
};