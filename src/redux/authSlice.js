import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload; // Set user info
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null; // Clear user info
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
