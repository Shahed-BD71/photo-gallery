import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: []
};
const ImageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        addImage: (state, action) => {
            state.images = action.payload;
        }
    }
})

export const {addImage} = ImageSlice.actions;
export const getAllImages = (state) => state.images.images;
export default ImageSlice.reducer;