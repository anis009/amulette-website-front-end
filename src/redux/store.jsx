import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter";
import photoSlice from "./features/photoLibrary";
import  productSlice  from "./features/products";

export const store = configureStore({
	reducer: {
		
		counter: counterSlice,
		product: productSlice,
		photo: photoSlice,
		
	},
});
