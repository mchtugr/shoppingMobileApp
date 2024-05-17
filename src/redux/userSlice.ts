import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: 'John', email: 'john@mail.com' },
    auth: {
      loading: false,
    },
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload.user
    },
    update: (state, action) => {
      state.user.name = action.payload.name
      state.user.email = action.payload.email
    },
  },
})

export const { update, signIn } = userSlice.actions
export default userSlice.reducer
