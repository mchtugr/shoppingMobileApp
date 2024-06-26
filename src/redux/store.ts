import { configureStore } from '@reduxjs/toolkit'

import addressReducer from './slices/address'
import userReducer from './slices/user'

const store = configureStore({
  reducer: {
    user: userReducer,
    address: addressReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
