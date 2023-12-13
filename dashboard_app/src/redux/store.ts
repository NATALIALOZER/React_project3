import { PreloadedState, combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './slices/auth';
import { tasksReducer } from './slices/tasks';
import { tabsReducer } from './slices/tabs';
import { postsReducer } from './slices/posts';
  
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
    tabs: tabsReducer,
    posts: postsReducer
});

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
return store;
};

export const createPreloadedState = (
customState: Partial<RootState>
): PreloadedState<RootState> => {
    return {
        tasks: { ...store.getState().tasks, ...customState.tasks },
        posts: { ...store.getState().posts, ...customState.posts },
        tabs: { ...store.getState().tabs, ...customState.tabs },
        auth: { ...store.getState().auth, ...customState.auth }
    };
};

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;