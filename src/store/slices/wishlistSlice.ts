import { createSlice } from "@reduxjs/toolkit";
import type { WishlistItem } from "../../types/wishlist.types";

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: []
};


const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // addToWishlist
    // removeFromWishlist
    // clearWishlist
    // (logic will be added later)
  }
});

export default wishlistSlice.reducer;
