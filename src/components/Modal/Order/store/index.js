import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
  title: 0,
  sum: 0,
  activeCategory: "sizes",
  order: {},
  fillings: [],
};

export const counterSlice = createSlice({
  name: "modalOrder",
  initialState,
  reducers: {
    setCount: (state, value) => {
      state.count = value.payload;
    },
    countIncrement: (state) => {
      ++state.count;
    },
    countDecrement: (state) => {
      state.count = state.count === 1 ? state.count : --state.count;
    },
    setTitle: (state, value) => {
      state.title = value.payload;
    },
    setSum: (state, value) => {
      state.sum = value.payload;
    },
    setActiveCategory: (state, value) => {
      state.activeCategory = value.payload;
    },
    setOrder: (state, value) => {
      state.order = value.payload;
    },
    setFillings: (state, value) => {
      state.fillings = value.payload;
    },
    resetStore: () => initialState,
  },
});

export const {
  countIncrement,
  countDecrement,
  setTitle,
  setSum,
  setActiveCategory,
  setFillings,
  setOrder,
  resetStore,
} = counterSlice.actions;

export default counterSlice.reducer;
