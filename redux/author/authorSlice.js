const { apiSlice } = require("../api/apiSlice");




const authorSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthor: builder.query({
      query: () => "/author",
    })
  })
});



export const { useGetAuthorQuery } = authorSlice;