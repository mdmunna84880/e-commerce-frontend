import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  email: string | null;
}

const initialState:AuthState = {
  isLoggedIn: false,
  email: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login
    // logout
    // (logic will be added later)
  }
});

export default authSlice.reducer;
