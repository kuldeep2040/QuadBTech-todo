import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlices";
import compeletedSlice from "./compeletedSlice";
import responsiveSlice from "./responsiveSlice";
import authReducer from './authSlice';


const store = configureStore({
  reducer: {
    todo: todoReducer,
    compeleted: compeletedSlice,
    responsive: responsiveSlice,
    auth: authReducer,

  },
});

export default store;
