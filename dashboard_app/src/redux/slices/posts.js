import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (userId) => {
    const { data } = await axios.get('/posts', { params: { userId: userId } });
    return data;
});

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
    const { data } = await axios.post('/posts', post);
    return data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    const { data } = await axios.delete(`/posts/${id}`);
    return data;
});

export const updatePost = createAsyncThunk('posts/updatePost', async (body) => {
    const { data } = await axios.patch(`/posts/${body._id}`, body);
    return data;
});

const initialState = {
    posts: {
        items: [],
        status: 'loading'
    },
    tags: {
        items: [],
        status: 'loading'
    },
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.posts.items = [];
            state.posts.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload;
            state.posts.status = 'loaded';
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = 'error';
        },
        [createPost.fulfilled]: (state, action) => {
            state.posts.items = [...state.posts.items, {...action.payload}];
            state.posts.status = 'loaded';
        },
        [deletePost.fulfilled]: (state, action) => {
            state.posts.items = [...state.posts.items].filter(post => post._id !== action.meta.arg);
            state.posts.status = 'loaded';
        },
        [updatePost.fulfilled]: (state, action) => {
            state.posts.items = [...state.posts.items].filter(post => post._id !== action.meta.arg._id)
            state.posts.items = [...state.posts.items, {...action.meta.arg}];
            state.posts.status = 'loaded';
        },
    }
});

export const selectPosts = (state) => state.posts;

export const postsReducer = postsSlice.reducer;