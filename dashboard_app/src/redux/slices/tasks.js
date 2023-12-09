import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';
import { json } from 'react-router-dom';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (userId) => {
    const { data } = await axios.get('/tasks', { params: { userId: userId } });
    return data;
});

export const createTask = createAsyncThunk('tasks/createTask', async (task) => {
    const { data } = await axios.post('/tasks', task);
    return data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
    const { data } = await axios.delete(`/tasks/${id}`);
    return data;
});

const initialState = {
    tasks: {
        items: [],
        status: 'loading'
    },
    tags: {
        items: [],
        status: 'loading'
    },
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchTasks.pending]: (state) => {
            state.tasks.items = [];
            state.tasks.status = 'loading';
        },
        [fetchTasks.fulfilled]: (state, action) => {
            state.tasks.items = action.payload;
            state.tasks.status = 'loaded';
        },
        [fetchTasks.rejected]: (state) => {
            state.tasks.items = [];
            state.tasks.status = 'error';
        },
        [createTask.fulfilled]: (state, action) => {
            state.tasks.items = [...state.tasks.items, {...action.payload}];
            state.tasks.status = 'loaded';
        },
        [deleteTask.fulfilled]: (state, action) => {
            console.log(action)
            state.tasks.items = [...state.tasks.items].filter(task => task._id !== action.meta.arg);
            state.tasks.status = 'loaded';
        },
    }
});

export const tasksReducer = tasksSlice.reducer;