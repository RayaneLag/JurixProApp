import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "user",
  initialState: {
    Username: "Guest",
    age: 20,
    email: "laggounrayan00@gmail.com",
    password: 12345,
    job: "avocat",
  },
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
