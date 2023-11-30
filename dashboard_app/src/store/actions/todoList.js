import axios from "axios";
import { addTask, setList } from "../reducers/todoListReducer";

//toastify
import { toast } from "react-toastify";

const showNotify = (serverMessage) => toast(serverMessage);

export const setTask = (user, data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:4444/api/tasks", {
        user,
        data,
      });
      dispatch(addTask(response.data.task));
    } catch (error) {
      console.log(error);
      showNotify(error.response.data.message);
    }
  };
  //  axios.post("http://localhost:4444/api/tasks", {
  //     user,
  //     data,
  //   })
  //   .then((response) => showNotify(response.data.message))
  //   .catch((err) => {
  //     console.log(err);
  //     showNotify(err.response.data.message);
  //   });
};

export const getTasks = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4444/api/tasks/GET`, {
        params: { userId: userId },
      });
      dispatch(setList(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTask = async (user, task) => {
  await axios
    .put(`http://localhost:4444/api/tasks/UPDATE/${user.currentUser.id}`, {
      id: user.currentUser.id,
      task: task,
    })
    .catch((err) => {
      console.log(err);
      showNotify(err.response.data.message);
    });
};