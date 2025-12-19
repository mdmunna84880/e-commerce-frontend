import { createSlice } from "@reduxjs/toolkit";
import type { CartItem } from "../../types/cart.types"

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart
    // removeFromCart
    // increaseQuantity
    // decreaseQuantity
    // clearCart
    // (logic will be implemented later)
  }
});

export default cartSlice.reducer;
