import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

export const fetchLoginData = createAsyncThunk('auth/fetchLoginData', async (params) => {
    const { data } = await axios.post('/auth/login', params);
    return data;
});

export const fetchRegistration = createAsyncThunk('auth/fetchRegistration', async (params) => {
    const { data } = await axios.post('/auth/registration', params);
    return data;
});

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async () => {
    const { data } = await axios.get('/auth/me');
    return data;
});

const initialState = {
    data: null,
    status: 'loading'
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchLoginData.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchLoginData.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchLoginData.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },
        [fetchRegistration.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchRegistration.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchRegistration.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },
        [fetchAuth.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchAuth.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },
    }
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;