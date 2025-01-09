import { configureStore } from "@reduxjs/toolkit";
import waitSliceReducer from '../slices/wait/waitSlice'
import authSliceReducer from '../slices/auth/authSlice'
import featureSliceReducer from '../slices/feature/featureSlice'


const store = configureStore({
    reducer:{
     wait:waitSliceReducer,
     auth:authSliceReducer,
     feature:featureSliceReducer,
      
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
