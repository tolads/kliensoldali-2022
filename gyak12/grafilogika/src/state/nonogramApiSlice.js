import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030/";

const parsePuzzle = (puzzle) => {
  try {
    return JSON.parse(puzzle);
  } catch (e) {
    return [];
  }
};

const nonogramApiSlice = createApi({
  reducerPath: "nonogramApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "authentication",
        method: "POST",
        body: { ...body, strategy: "local" },
      }),
    }),
    getNonograms: builder.query({
      query: (page = 0) => ({ url: `puzzles?$skip=${page * 5}&$limit=${5}` }),
      transformResponse: (response) =>
        response.data.map((item) => ({
          id: item.id,
          name: item.title,
          table: parsePuzzle(item.puzzle),
        })),
      providesTags: ["Nonogram"],
    }),
    getNonogram: builder.query({
      query: (id) => ({ url: `puzzles/${id}` }),
      transformResponse: (response) => ({
        id: response.id,
        name: response.title,
        table: parsePuzzle(response.puzzle),
      }),
      providesTags: ["Nonogram"],
    }),
    postNonogram: builder.mutation({
      query: (body) => ({
        url: "puzzles",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Nonogram"],
    }),
  }),
});

export const {
  useGetNonogramQuery,
  useGetNonogramsQuery,
  useLoginMutation,
  useRegisterMutation,
  usePostNonogramMutation,
} = nonogramApiSlice;

export default nonogramApiSlice;
