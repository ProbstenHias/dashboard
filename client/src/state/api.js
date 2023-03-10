import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `general/user/${id}`,
      prividesTags: ["User"],
    }),
    getProducts: builder.query({
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
    getSales: builder.query({
      query: () => "sales/sales",
      prividesTags: ["Sales"],
    }),
    getAdmins: builder.query({
      query: () => "management/admins",
      prividesTags: ["Admins"],
    }),
    getUserPerformance: builder.query({
      query: (id) => `management/performance/${id}`,
      prividesTags: ["Performance"],
    }),
    getDashboard: builder.query({
      query: () => "general/dashboard",
      prividesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
