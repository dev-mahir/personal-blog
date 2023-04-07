const { apiSlice } = require("../api/apiSlice");




const postSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getSinglePost: builder.query({
      query: (id) => `/posts/${id}`,
    })
  })
});



export const { useGetPostsQuery , useGetSinglePostQuery} = postSlice;