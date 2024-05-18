import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "user/signUp",
        method: "post",
        body: data,
      }),
    }),
    ai: builder.mutation({
      query: (data) => ({
        url: "/ai",
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

export const {
  useSignUpMutation,
  useLoginMutation,
  useAiMutation,
  useResAiQuery,
} = apiSlice;

// https://jurixproback.onrender.com
