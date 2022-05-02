import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030/";

const nonogramApiSlice = createApi({
  reducerPath: "nonogramApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
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

export const { useGetNonogramsQuery } = nonogramApiSlice;

export default nonogramApiSlice;
