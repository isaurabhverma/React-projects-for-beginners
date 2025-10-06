import { configureStore } from "@reduxjs/toolkit";
import Cart from "./reducer/reducer"

const store = configureStore({
  reducer: {
    Cart: Cart, // Register your reducer
  },
});

export default store;
