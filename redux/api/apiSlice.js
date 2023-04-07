

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Posts", "Authors", "SinglePost"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5050"
  }),
  endpoints: () => ({})
})


