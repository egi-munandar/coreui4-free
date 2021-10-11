import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  apiHost: 'http://ptani.test',
  sidebarShow: true,
  sidebarUnfoldable: false,
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setApiHost: (state, action) => {
      state.apiHost = action.payload
    },
    setSidebarShow: (state, action) => {
      state.sidebarShow = action.payload
    },
    setSidebarUnfoldable: (state, action) => {
      state.sidebarUnfoldable = action.payload
    },
  },
})

export const { setApiHost, setSidebarShow, setSidebarUnfoldable } = configSlice.actions
export default configSlice.reducer
