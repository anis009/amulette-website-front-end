import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	license: "all",
	category: ["all"],
	photoList: [],
	page: 1,
	limit: 10,
	size: 0,
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
			// if (state.category.length > 1 && state.category.includes("all")) {
			// 	state.category = state.category.filter((_item) => _item !== "all");
			// }
		},
		setPhotoList: (state, action) => {
			state.limit = action.payload?.limit;
			state.page = action.payload?.page;
			state.size = action.payload?.size;
			state.photoList = action.payload?.data;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setLicense, setCategory, setPhotoList } = photoSlice.actions;

export default photoSlice.reducer;
