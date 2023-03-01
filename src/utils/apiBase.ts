import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBase = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_URL,
  }),
  endpoints: (builder) => ({}),
});

export default apiBase;
