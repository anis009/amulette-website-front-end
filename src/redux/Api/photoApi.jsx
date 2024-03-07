import { api } from "./api";

const photoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: ({ page = 1, limit = 10, queryString }) => {
        return `/photos?page=${page}&limit=${limit}&queryString=${queryString}`;
      },
      providesTags: ["photos"],
    }),
    getRecentPhotos: builder.query({
      query: () => `/photos/recent`,
      providesTags: ["recent"],
    }),
    getSinglePhotos: builder.query({
      query: (id) => `/photos/${id}`,
      providesTags: (_result, _error, id) => [{ type: "photo", id }],
    }),
    getAllPhotos: builder.mutation({
      query: ({
        categories,
        limit,
        page,
        type,
        searchTerm = "",
        status = "",
      }) => ({
        url: `/photos/all?limit=${limit}&page=${page}&type=${type}&searchTerm=${searchTerm}&status=${status}`,
        method: "POST",
        body: categories,
      }),
      invalidatesTags: ["photos"],
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/photos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["photos"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/photos/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "photo", id },
        "photos",
      ],
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSinglePhotosQuery,
  useGetRecentPhotosQuery,
  useGetAllPhotosMutation,
} = photoApi;
