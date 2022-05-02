import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030/";

const nonogramApiSlice = createApi({
  reducerPath: "nonogramApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: "authentication",
        method: "POST",
        body: { ...body, strategy: "local" },
      }),
    }),
    getNonograms: build.query({
      query: () => ({ url: "puzzles" }),
      transformResponse: (response) =>
        response.data.map((item) => ({
          id: item.id,
          name: item.title,
          table: JSON.parse(item.puzzle),
        })),
    }),
  }),
});

console.log(nonogramApiSlice);
export const { useGetNonogramsQuery, useLoginMutation, useRegisterMutation } =
  nonogramApiSlice;

export default nonogramApiSlice;
