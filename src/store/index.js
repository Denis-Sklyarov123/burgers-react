import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./test/index";
import modalOrder from "../components/Modal/Order/store/index";
import mainPage from "../pages/Main/store/index";

export const store = configureStore({
  reducer: { counter: counterReducer, modalOrder, mainPage },
});
