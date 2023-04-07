const { apiSlice } = require("../api/apiSlice");




const socailSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSocail: builder.query({
      query: () => "/socail",
    })
  })
});



export const { useGetSocailQuery } = socailSlice;