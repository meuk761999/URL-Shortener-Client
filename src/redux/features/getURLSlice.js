import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { DOMAIN_NAME,JWT_TOKEN } from '../../../config/index';
import axios from 'axios';
const initialState ={
    originalURL:"https://",
    urlId:undefined,
    shortURL:"",
    loading:false,
    statusCode:null,
    allAvailableURLs:[]
}
export const  getShortUrlService=createAsyncThunk('getShortUrlService',async (_,{ getState })=>{
   try {
    let response = await axios.post(`${DOMAIN_NAME}api/v1/modules/shorturl/`,{"originalUrl":getState()?.urlReducer?.originalURL}, {headers: {
        'Content-Type': 'application/json',
        "eh-auth-token": localStorage.getItem(JWT_TOKEN)
    }});
    return {status:response?.status,url:response?.data?.data?.shortUrl,urlId:response?.data?.data?.urlId};
   } catch (err) {
    return {status:err?.response?.status,url:err?.response?.data?.data?.shortUrl,urlId:err?.response?.data?.data?.urlId};
   }

})

export const getAllURLsService = createAsyncThunk("getAllURLsService",async (_,{getState})=>{
    try {
            let response = await axios.get(`${DOMAIN_NAME}api/v1/modules/shorturl/?pageNumber=1&perPage=100`,{headers: {
                'Content-Type': 'application/json',
                "eh-auth-token": localStorage.getItem(JWT_TOKEN)
            }});
            return {status:response?.status,availableURLs:response?.data?.data?.availableURLs};
    } catch (err) {
    }
})

export const deleteURLService = createAsyncThunk("deleteURLService",async (_,{getState})=>{
    try {
            let response = await axios.delete(`${DOMAIN_NAME}api/v1/modules/shorturl/`,{headers: {
                'Content-Type': 'application/json',
                "eh-auth-token": localStorage.getItem(JWT_TOKEN)
            },data:{"urlId":getState()?.urlReducer?.urlId}});
            console.log("THUNK CALLED",response)
            return {status:response?.status,availableURLs:response?.data?.data?.availableURLs};
    } catch (err) {
        console.log("THUNK ERROR",err);
    }
})

export const urlShortenerSlice=createSlice({
    name:"URLShorteningService",
    initialState,
    reducers:{
        setOriginalURL:(state,action)=>{state.originalURL=action.payload},
        setURLID:(state,action)=>{state.urlId=action.payload},
        resetStatusCode:(state,action)=>{state.statusCode=action.payload},
    },
    extraReducers:(builder)=>{
        builder.addCase(getShortUrlService.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getShortUrlService.fulfilled,(state,action)=>{
            state.loading=false;
            state.statusCode=action?.payload?.status;
            state.urlId=action?.payload?.urlId
            if(action?.payload?.status===201||action?.payload?.status===409)
               state.shortURL=action?.payload?.url;
        });
        builder.addCase(getAllURLsService.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getAllURLsService.fulfilled,(state,action)=>{
            state.loading=false;
            state.statusCode=action?.payload?.status;
            if(action?.payload?.status==200)
            state.allAvailableURLs=action?.payload?.availableURLs;
        });
        builder.addCase(deleteURLService.pending,(state,action)=>{
        });
        builder.addCase(deleteURLService.fulfilled,(state,action)=>{

        });


    }
})
export const{setShortURL,setOriginalURL ,setURLID,resetStatusCode} = urlShortenerSlice.actions;
export default urlShortenerSlice.reducer;