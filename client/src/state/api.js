import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `general/user/${id}`,
      prividesTags: ["User"],
    }),
    getProcuts: builder.query({
      query: () => `client/products`,
      prividesTags: ["Products"],
    }),
  }),
});

export const { useGetUserQuery, useGetProcutsQuery } = api;
