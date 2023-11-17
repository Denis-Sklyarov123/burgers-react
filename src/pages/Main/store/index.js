import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "sandwiches",
  name: null,
  isOpen: false,
  data: null,
  finalCount: null,
};

export const counterSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    setActiveCategory: (state, value) => {
      state.activeCategory = value.payload;
    },
    setIsOpen: (state, value) => {
      state.isOpen = value.payload;
    },
    setData: (state, value) => {
      state.data = value.payload;
    },
    setFinalCount: (state, value) => {
      state.finalCount = value.payload;
    },
    setName: (state, value) => {
      state.name = value.payload;
    },
  },
});

export const { setActiveCategory, setIsOpen, setData, setFinalCount, setName } =
  counterSlice.actions;

export default counterSlice.reducer;
