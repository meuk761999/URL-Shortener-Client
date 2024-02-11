import {configureStore} from '@reduxjs/toolkit';
import urlReducer from './features/getURLSlice';
export const store = configureStore({
    reducer:{
        urlReducer
    }
})