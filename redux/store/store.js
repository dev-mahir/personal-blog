const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const { apiSlice } = require("../api/apiSlice");




export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})