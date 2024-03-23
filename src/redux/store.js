import {configureStore} from '@reduxjs/toolkit';
import urlReducer from '@/redux/features/getURLSlice';
import userReducer from '@/redux/features/userSlice';
export const store = configureStore({
    reducer:{
        urlReducer,
        userReducer
    }
})