import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import {DOMAIN_NAME,JWT_TOKEN} from '@@@/config/index';
import axios from 'axios';

const initialState ={
    loginData:{},
    userDataResponse:{
        data:undefined,
        token:undefined,
    },
    loading:false,
    statusCode:null,
};

export const userLoginService = createAsyncThunk("userLoginService",async(_,{getState})=>{
    try {
        console.log("THUNK CALLED",getState()?.userReducer?.loginData)
        let response = await axios.post(`${DOMAIN_NAME}api/v1/modules/users/login`,{userData:getState()?.userReducer?.loginData});
        console.log(response);
    } catch (err) {
        cosnole.log("THUNK ERROR",err)
    }
})

const userSlice =createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        setUserData:(state,action)=>{state.loginData={...state.loginData,...action?.payload}},
    },
    extraReducers:(builder)=>{
        builder.addCase(userLoginService.pending,(state,action)=>{});
        builder.addCase(userLoginService.fulfilled,(state,action)=>{});
        builder.addCase(userLoginService.rejected,(state,action)=>{});
    }

});
export const {setUserData} = userSlice.actions;
export default userSlice.reducer;
