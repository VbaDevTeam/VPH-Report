import { configureStore } from '@reduxjs/toolkit';
import conrepoReducer from './conrepoSlice'

export const store = configureStore({
    reducer: {
         conrepo: conrepoReducer,
    },
});
