import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions", "Geography"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `general/user/${id}`,
      prividesTags: ["User"],
    }),
    getProcuts: builder.query({
      query: () => "client/products",
      prividesTags: ["Products"],
    }),
    getCustomers: builder.query({
      query: () => "client/customers",
      prividesTags: ["Customers"],
    }),
    getTransactions: builder.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      prividesTags: ["Transactions"],
    }),
    getGeography: builder.query({
      query: () => "client/geography",
      prividesTags: ["Geography"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProcutsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
} = api;
