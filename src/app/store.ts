import { configureStore } from "@reduxjs/toolkit";
import waitSliceReducer from '../slices/wait/waitSlice'
import authSliceReducer from '../slices/auth/authSlice'
import featureSliceReducer from '../slices/feature/featureSlice'
import userSliceReducer from '../slices/user/userSlice'
import templateSliceReducer from '../slices/template/templateSlice'
import adminAuthSliceReducer from '../slices/admin/auth/authSlice'
import adminUserSliceReducer from '../slices/admin/users/userSlice'
import portfolioSliceReducer from '../slices/portfolio/portfolioSlice'


const store = configureStore({
    reducer:{
     wait:waitSliceReducer,
     auth:authSliceReducer,
     feature:featureSliceReducer,
     user:userSliceReducer,
     template: templateSliceReducer,
     adminauth:adminAuthSliceReducer,
     adminuser:adminUserSliceReducer,
     portfolio:portfolioSliceReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
