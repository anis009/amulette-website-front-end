import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	
	singleProduct:{}
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setSingleProduct: (state, action) => {
			state.singleProduct = action.payload;
		},
		
	},
});

// Action creators are generated for each case reducer function
export const { setSingleProduct } = productSlice.actions;

export default productSlice.reducer;
