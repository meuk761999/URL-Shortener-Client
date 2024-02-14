import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { DOMAIN_NAME,JWT_TOKEN } from '../../../config/index';
import axios from 'axios';
const initialState ={
    originalURL:"https://",
    urlId:undefined,
    shortURL:"",
    loading:false,
    statusCode:null
}
export const  getShortUrlService=createAsyncThunk('getShortUrlService',async (_,{ getState })=>{
   try {
    console.log("CALLED")
    let response = await axios.post(`${DOMAIN_NAME}api/v1/modules/shorturl/`,{"originalUrl":getState()?.urlReducer?.originalURL}, {headers: {
        'Content-Type': 'application/json',
        "eh-auth-token": localStorage.getItem(JWT_TOKEN)
    }});
    console.log("L-10 inside getShortUrlService",localStorage.getItem(JWT_TOKEN));
    return {status:response?.status,url:response?.data?.data?.shortUrl,urlId:response?.data?.data?.urlId};
   } catch (err) {
    return {status:err?.response?.status,url:err?.response?.data?.data?.shortUrl,urlId:err?.response?.data?.data?.urlId};
   }

})
export const urlShortenerSlice=createSlice({
    name:"URLShorteningService",
    initialState,
    reducers:{
        setOriginalURL:(state,action)=>{state.originalURL=action.payload},
        setShortURL:(state,action)=>{state.shortURL=action.payload},
        allAvailableURLs:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(getShortUrlService.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getShortUrlService.fulfilled,(state,action)=>{
            console.log("action",action)
            state.loading=false;
            state.statusCode=action?.payload?.status;
            state.urlId=action?.payload?.urlId
            if(action?.payload?.status===201||action?.payload?.status===409)
               state.shortURL=action?.payload?.url;
        });

    }
})
export const{setShortURL,setOriginalURL} = urlShortenerSlice.actions;
export default urlShortenerSlice.reducer;