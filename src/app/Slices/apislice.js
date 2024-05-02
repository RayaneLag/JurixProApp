import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    SignIn: builder.mutation({
      query: (data) => ({
        url: "user/SignUp",
        method: "post",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const { useSignInMutation, useLoginMutation } = apiSlice;
