
import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/product.types";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}
});

export default productsSlice.reducer;
