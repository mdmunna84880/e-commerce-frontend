import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  isSearchOpen: boolean;
  searchQuery: string;
}

const initialState: UIState = {
  isSearchOpen: false,
  searchQuery: ""
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // toggleSearch
    // setSearchQuery
    // clearSearch
    // (logic will be added later)
  }
});

export default uiSlice.reducer;
