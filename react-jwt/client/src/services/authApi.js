import { createApi, fetchBaseQuery } from "@reduxjs/toolkit";

export default authApi = createApi({
  reducerPath: "authApi",
  fetchBaseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: "api/auth/login",
          method: "post",
          body,
        };
      },
    }),
  }),
});
export const { useLoginUserMutation } = authApi;
