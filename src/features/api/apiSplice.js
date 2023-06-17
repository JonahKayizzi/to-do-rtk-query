import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSplice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
  }),
});

export const { useGetTodosQuery } = apiSplice;