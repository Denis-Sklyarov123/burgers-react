import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer/index";
import modalOrder from "../components/Modal/Order/store/index";
import mainPage from "../pages/Main/store/index";

export const store = configureStore({
  reducer: { counter: counterReducer, modalOrder, mainPage },
});
