import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	license: "all",
	category: ["all"],
};

export const photoSlice = createSlice({
	name: "photo",
	initialState,
	reducers: {
		setLicense: (state, action) => {
			state.license = action.payload;
		},
		setCategory: (state, action) => {
			const idx = state.category.findIndex((_item) => _item === action.payload);
			if (idx < 0 && action.payload) {
				state.category.push(action.payload);
			} else {
				state.category = state.category.filter(
					(_item) => _item !== action.payload
				);
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { setLicense, setCategory } = photoSlice.actions;

export default photoSlice.reducer;
