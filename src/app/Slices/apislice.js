import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jurixproback.onrender.com" }),
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
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "settings/updateProfile",
        method: "post",
        body: data,
      }),
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: "settings/updatePassword",
        method: "post",
        body: data,
      }),
    }),
    // Client endpoints
    fetchClients: builder.query({
      query: () => ({
        url: "clients",
        method: "get",
      }),
    }),
    addClient: builder.mutation({
      query: (data) => ({
        url: "clients",
        method: "post",
        body: data,
      }),
    }),
    updateClient: builder.mutation({
      query: ({ id, data }) => ({
        url: `clients/${id}`,
        method: "put",
        body: data,
      }),
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `clients/${id}`,
        method: "delete",
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useAiMutation,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useFetchClientsQuery,
  useAddClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = apiSlice;

export default apiSlice;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
//   endpoints: (builder) => ({
//     signUp: builder.mutation({
//       query: (data) => ({
//         url: "user/signUp",
//         method: "post",
//         body: data,
//       }),
//     }),
//     ai: builder.mutation({
//       query: (data) => ({
//         url: "/ai",
//         method: "post",
//         body: data,
//       }),
//     }),
//     login: builder.mutation({
//       query: (data) => ({
//         url: "user/login",
//         method: "post",
//         body: data,
//       }),
//     }),
//     fetchClients: builder.query({
//       query: () => ({
//         url: "clients",
//         method: "get",
//       }),
//     }),
//     addClient: builder.mutation({
//       query: (data) => ({
//         url: "clients",
//         method: "post",
//         body: data,
//       }),
//     }),
//     updateClient: builder.mutation({
//       query: ({ id, data }) => ({
//         url: `clients/${id}`,
//         method: "put",
//         body: data,
//       }),
//     }),
//     deleteClient: builder.mutation({
//       query: (id) => ({
//         url: `clients/${id}`,
//         method: "delete",
//       }),
//     }),

//     updateProfile: builder.mutation({
//       query: (data) => ({
//         url: "settings/updateProfile",
//         method: "post",
//         body: data,
//       }),
//     }),
//     updatePassword: builder.mutation({
//       query: (data) => ({
//         url: "settings/updatePassword",
//         method: "post",
//         body: data,
//       }),
//     }),
//   }),
// });

// export const {
//   useSignUpMutation,
//   useLoginMutation,
//   useAiMutation,
//   useUpdateProfileMutation,
//   useUpdatePasswordMutation,
// } = apiSlice;

// export default apiSlice;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
//   endpoints: (builder) => ({
//     signUp: builder.mutation({
//       query: (data) => ({
//         url: "user/signUp",
//         method: "post",
//         body: data,
//       }),
//     }),
//     ai: builder.mutation({
//       query: (data) => ({
//         url: "/ai",
//         method: "post",
//         body: data,
//       }),
//     }),
//     login: builder.mutation({
//       query: (data) => ({
//         url: "user/login",
//         method: "post",
//         body: data,
//       }),
//     }),
//   }),
// });

// export const { useSignUpMutation, useLoginMutation, useAiMutation } = apiSlice;

// export default apiSlice;
