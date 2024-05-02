import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")),
  reducers: {
    setUser: (state, action) => {
      console.log("hello");
      localStorage.setItem("user", JSON.stringify(action.payload));
      return (state = action.payload);
    },
    logout: (state) => {
      state = null;
      return localStorage.removeItem("user");
    },
  },
});

export const { logout, setUser } = userslice.actions;
