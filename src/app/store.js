import { configureStore } from '@reduxjs/toolkit'
import auth from '../features/auth/authSlice'
// import auth
export const store = configureStore({
  reducer: {
    auth
  },
})