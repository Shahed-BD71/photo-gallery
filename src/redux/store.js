import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from './images/ImageSlice';

export const store = configureStore ({
    reducer: {
        images: ImageReducer,
    }
})