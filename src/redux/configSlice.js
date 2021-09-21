import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  apiHost: 'http://localhost',
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setApiHost: (state, action) => {
      state.apiHost = action.payload
    },
  },
})

export const { setApiHost } = configSlice.actions
export default configSlice.reducer
