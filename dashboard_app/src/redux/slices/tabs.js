import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateTab = createAsyncThunk('tabs/updateTab', async (index) => index);

const initialState = {
    index: 0
};

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducer: {},
    extraReducers: {
        [updateTab.fulfilled]: (state, action) => {
            state.index = action.payload;
        }
    }
});

export const selectTab = (state) => state.tabs.index;
export const tabsReducer = tabsSlice.reducer;