import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	
	isMobileMenuOpen :false
};

export const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		setSingleProduct: (state, action) => {
			state.singleProduct = action.payload;
		},
		
	},
});

// Action creators are generated for each case reducer function
export const { setSingleProduct } = menuSlice.actions;

export default menuSlice.reducer;
