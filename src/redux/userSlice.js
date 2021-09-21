import { createSlice } from '@reduxjs/toolkit'
const loadUser = () => {
  try {
    const user = localStorage.getItem('user')
    if (user === null) {
      return null
    } else {
      return JSON.parse(user)
    }
  } catch (e) {
    return null
  }
}

const initialState = loadUser()

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      localStorage.setItem('user', JSON.stringify(payload))
      return payload
    },
    logout: (state) => {
      localStorage.removeItem('user')
      return null
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
