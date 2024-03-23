import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
