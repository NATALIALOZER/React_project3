import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { tasksReducer } from './slices/tasks';
import { tabsReducer } from './slices/tabs';

const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: tasksReducer,
        tabs: tabsReducer
    }
});

export default store;