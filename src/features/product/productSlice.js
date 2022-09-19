import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  title: null,
  subtitle: null,
  image: null,
  tags: [],
  sales: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productFetched(state, action) {
      const { id, title, subtitle, image, tags, sales } = action.payload;
      state.id = id;
      state.title = title;
      state.subtitle = subtitle;
      state.image = image;
      state.tags = tags;
      state.sales = sales;
    },
  },
});

export const { productFetched } = productSlice.actions;

export default productSlice.reducer;
