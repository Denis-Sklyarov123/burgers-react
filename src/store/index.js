import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./test/index";
import order from "../components/Modal/Order/store/index";

export const store = configureStore({
  reducer: { counter: counterReducer, order },
});
