import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	tagTypes: ["photos", "photo", "recent"],
	baseQuery: fetchBaseQuery({
		// baseUrl: "http://localhost:5050/api/v1",
		baseUrl: "https://amulette-admin-backend.vercel.app/api/v1",
	}),
	endpoints: () => ({}),
});
