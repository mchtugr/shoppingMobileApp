import { configureStore } from '@reduxjs/toolkit'
import addressReducer from './addressSlice'
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    address: addressReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
