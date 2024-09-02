import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login and logout is a action therefore at the time of export we use authSlice.reducer
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export const { actions, reducer } = authSlice;
export default authSlice.reducer;
