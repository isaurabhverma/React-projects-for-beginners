import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // Initial empty array for cart items
  totalQuantity: 0, // Total number of items in cart
  totalPrice: 0, // Total price of all cart items
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (itemIndex !== -1) {
        state.totalQuantity -= state.cartItems[itemIndex].quantity;
        state.totalPrice -= state.cartItems[itemIndex].price * state.cartItems[itemIndex].quantity;
        state.cartItems.splice(itemIndex, 1);
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      } else if (item && item.quantity === 1) {
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload.id);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  }
});

// Export Actions
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

// Export Reducer
export default cartSlice.reducer;
