import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter";
import photoSlice from "./features/photoLibrary";
import productSlice from "./features/products";
import { api } from "./Api/api";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		product: productSlice,
		photo: photoSlice,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});
