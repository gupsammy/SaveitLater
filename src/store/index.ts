// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import exampleReducer from "./exampleSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
