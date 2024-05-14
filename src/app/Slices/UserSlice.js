import { createSlice } from "@reduxjs/toolkit";
import { LogIn, User } from "lucide-react";

export const userslice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user"))
    ? {
        IslogedIn: true,
        user: JSON.parse(localStorage.getItem("user")),
      }
    : {
        IslogedIn: false,
        user: null,
      },
  reducers: {
    // setUser: (state, action) => {
    //   console.log("hello");
    //   localStorage.setItem("user", JSON.stringify(action.payload));
    //   return (state = action.payload);
    // },
    login(state, action) {
      state.IslogedIn = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      localStorage.removeItem("user");
      console.log("hello", state);
      return (state = {
        IslogedIn: false,
        user: null,
      });
    },
  },
});

export const { logout, login } = userslice.actions;
