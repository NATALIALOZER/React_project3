import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (userId) => {
    const { data } = await axios.get('/tasks', { params: { userId: userId } });
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
    }
});

export const tasksReducer = tasksSlice.reducer;