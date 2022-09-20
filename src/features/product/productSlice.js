import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// use redux toolkit thunk to perform data fetching
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios.get("/products");
    return response.data[0];
  }
);

// note: this state is only for a single product demo
// in a real-world scenario with many products,
// initial state would be something like {products: [], status: 'loading', error: null}
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
  reducers: {
    // our create, update, delete non-asynchronous actions go here
  },
  extraReducers(builder) {
    // maps our async action type to matching reducer
    builder
      .addCase(fetchProduct.pending, (state) => {
        // note: under the hood toolkit uses immer for not mutating state
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
