import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "sandwiches",
  name: null,
  isOpen: false,
  data: null,
  finalCount: null,
  finalOrder: [],
  finalSum: 0,
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
    setFinalOrder: (state, value) => {
      state.finalOrder = value.payload;
    },
    accumulatorSum: (state) => {
      state.finalSum = state.finalOrder.reduce(
        (accumulator, currentValue) => accumulator + currentValue.sum,
        0
      );
    },
  },
});

export const {
  setActiveCategory,
  setIsOpen,
  setData,
  setFinalCount,
  setName,
  setFinalOrder,
  accumulatorSum,
} = counterSlice.actions;

export default counterSlice.reducer;
