import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  title: null,
  sales: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productFetched(state, action) {
      const { id, title, sales } = action.payload;
      state.id = id;
      state.title = title;
      state.sales = sales;
    },
  },
});

export const { productFetched } = productSlice.actions;

export default productSlice.reducer;
