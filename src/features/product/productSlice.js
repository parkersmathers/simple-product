import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios.get("/products");
    return response.data[0];
  }
);

const initialState = {
  id: null,
  title: null,
  subtitle: null,
  image: null,
  tags: [],
  sales: [],
  status: "loading",
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.id = null;
        state.title = null;
        state.subtitle = null;
        state.image = null;
        state.tags = [];
        state.sales = [];
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        const { id, title, subtitle, image, tags, sales } = action.payload;
        state.id = id;
        state.title = title;
        state.subtitle = subtitle;
        state.image = image;
        state.tags = tags;
        state.sales = sales;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.id = null;
        state.title = null;
        state.subtitle = null;
        state.image = null;
        state.tags = [];
        state.sales = [];
        state.status = "failed";
        state.error = `Oops! An error with status code ${action.error?.code} occurred: ${action.error?.message}. Please try again later`;
      });
  },
});

export default productSlice.reducer;
