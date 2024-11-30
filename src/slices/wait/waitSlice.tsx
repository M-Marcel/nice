import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WaitListFormData, WaitUser } from "../../dataTypes";
import waitService from "../../helpers/waitService";

type InitialState = {
    user:WaitUser | null
    isError:boolean
    isSuccess:boolean
    isLoading:boolean
    message:string
}
const storedWaitUser = localStorage.getItem('waitUser');
const user = storedWaitUser ? JSON.parse(storedWaitUser) : null;

//WaitList

export const join = createAsyncThunk('wait/join', async(userData:WaitListFormData, thunkApi) => {
    try{
        return await waitService.join(userData)
    }catch(error:any){
        const message = (error.response && error.response.data && error.response.data.message)||
        error.message || error || error.toString();
        console.log(message)
        return thunkApi.rejectWithValue(message)
       
    }
})

const initialState:InitialState = {
    user:user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

const waitSlice = createSlice({
    name:"wait",
    initialState,
    reducers:{
        reset:(state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(join.pending, (state) => {
            state.isLoading = true
        }) 
        .addCase(join.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(join.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
            state.user = null
        })
    }
}) 

export const { reset } = waitSlice.actions
export default waitSlice.reducer