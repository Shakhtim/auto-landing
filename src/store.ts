import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useReduxDispatch } from 'react-redux';
import admin from './redux/admin';

const store = configureStore({
    reducer: {
        admin,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;
