import { configureStore } from '@reduxjs/toolkit'
import configReducer from './redux/configSlice'
import userReducer from './redux/userSlice'

export const store = configureStore({
  reducer: {
    config: configReducer,
    user: userReducer,
  },
})
