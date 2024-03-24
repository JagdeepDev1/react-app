import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reduxapp/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
