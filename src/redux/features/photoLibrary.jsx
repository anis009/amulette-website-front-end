import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	license: "all",
	category: "all",
};

export const photoSlice = createSlice({
	name: "photo",
	initialState,
	reducers: {
		setLicense: (state, action) => {
			state.license = action.payload;
		},
		setCategory: (state, action) => {
			state.category = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setLicense, setCategory } = photoSlice.actions;

export default photoSlice.reducer;
