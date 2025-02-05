import { configureStore } from "@reduxjs/toolkit";
import waitSliceReducer from '../slices/wait/waitSlice'
import authSliceReducer from '../slices/auth/authSlice'
import featureSliceReducer from '../slices/feature/featureSlice'
import userSliceReducer from '../slices/user/userSlice'
import adminAuthSliceReducer from '../slices/admin/auth/authSlice'
import adminUserSliceReducer from '../slices/admin/users/userSlice'


const store = configureStore({
    reducer:{
     wait:waitSliceReducer,
     auth:authSliceReducer,
     feature:featureSliceReducer,
     user:userSliceReducer,
     adminauth:adminAuthSliceReducer,
     adminuser:adminUserSliceReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
