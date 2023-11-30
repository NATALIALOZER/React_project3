const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const GET_LIST = "GET_LIST";
const SET_LIST = "SET_LIST";
const CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS";

const defaultState = { tasks: [] };

export function todoListReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TASK:
      const updatedTasks = {
        ...state,
        tasks: [...state.tasks, action.data],
      };
      return updatedTasks;
    case CHANGE_TASK_STATUS:
      const tasks = [...state.tasks];
      tasks.map((task) => {
        if (task.id === action.data.id) {
          task.checked = action.data.checked;
          return task;
        }
      });
      return {
        ...state,
        tasks,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.data),
      };
    case GET_LIST:
      return { ...state };
    case SET_LIST:
      return {
        ...state,
        tasks: action.data || [],
      };
    default:
      return state;
  }
}

export const addTask = (text) => ({ type: ADD_TASK, data: text });
export const deleteTask = (id) => ({ type: DELETE_TASK, data: id });
export const getList = () => ({ type: GET_LIST });
export const setList = (taskList) => ({ type: SET_LIST, data: taskList });
export const changeStatus = (data) => ({
  type: CHANGE_TASK_STATUS,
  data: data,
});