import { api } from "./api";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        return `/categories`;
      },
      providesTags: ["categories"],
    }),
    getRecentCategories: builder.query({
      query: () => `/categories/recent`,
      providesTags: ["recent"],
    }),
    getSingleCategories: builder.query({
      query: (id) => `/categories/${id}`,
      providesTags: (_result, _error, id) => [{ type: "photo", id }],
    }),
    getAllCategories: builder.mutation({
      query: ({ categories, limit, page, type, searchTerm }) => ({
        url: `/categories/all?limit=${limit}&page=${page}&type=${type}&searchTerm=${searchTerm}`,
        method: "POST",
        body: categories,
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSingleCategoriesQuery,
  useGetRecentCategoriesQuery,
  useGetAllCategoriesMutation,
} = categoryApi;
