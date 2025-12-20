
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product.types";
import { fetchAllProductsApi, fetchCategoriesApi, fetchProductsByCategoryApi } from "../../services/productApi";

interface ProductsState {
  products: Product[];
  categories: string[];
  selectedCategory: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  categories: [],
  selectedCategory: null,
  loading: false,
  error: null
};

export const fetchAllProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchAll", async (_, { rejectWithValue }) => {
  try {
    return await fetchAllProductsApi();
  } catch {
    return rejectWithValue("Failed to fetch products");
  }
});

export const fetchCategories = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("products/fetchCategories", async (_, { rejectWithValue }) => {
  try {
    return await fetchCategoriesApi();
  } catch {
    return rejectWithValue("Failed to fetch categories");
  }
});

export const fetchProductsByCategory = createAsyncThunk<
  Product[],
  string,
  { rejectValue: string }
>("products/fetchByCategory", async (category, { rejectWithValue }) => {
  try {
    return await fetchProductsByCategoryApi(category);
  } catch {
    return rejectWithValue("Failed to fetch products for category");
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string | null>) {
    state.selectedCategory = action.payload;
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  }
});

export default productsSlice.reducer;
export const { setSelectedCategory } = productsSlice.actions;
