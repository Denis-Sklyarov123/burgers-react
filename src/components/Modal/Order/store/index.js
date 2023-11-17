import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
  title: 0,
};

export const counterSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCount: (state, value) => {
      //   console.log(value);
      state.count = value.payload;
    },
    countIncrement: (state) => {
      ++state.count;
    },
    countDecrement: (state) => {
      state.count = state.count === 1 ? state.count : --state.count;
    },
    // setTitle: (state) => {

    // }
  },
});

export const { countIncrement, countDecrement, setTitle } =
  counterSlice.actions;

export default counterSlice.reducer;
