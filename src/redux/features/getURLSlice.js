import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    shortURL:""
}

export const urlShortenerSlice=createSlice({
    name:"URLShorteningService",
    initialState,
    reducers:{
        setShortURL:(state,action)=>{state.shortURL=action.payload},
    }
})
export const{setShortURL} = urlShortenerSlice.actions;
export default urlShortenerSlice.reducer;