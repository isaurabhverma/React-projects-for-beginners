import { createSlice, createSelector } from '@reduxjs/toolkit'

// items shape: { [productId]: { product, quantity } }
const initialState = {
  items: {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const productId = product.id
      if (!state.items[productId]) {
        state.items[productId] = { product, quantity: 1 }
      }
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload
      const item = state.items[productId]
      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload
      const item = state.items[productId]
      if (item) {
        item.quantity -= 1
        if (item.quantity <= 0) {
          delete state.items[productId]
        }
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload
      if (state.items[productId]) {
        delete state.items[productId]
      }
    },
    clearCart: (state) => {
      state.items = {}
    }
  }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer

// Selectors
export const selectCartItems = (state) => state.cart.items

export const selectCartCount = createSelector([selectCartItems], (items) => {
  return Object.values(items).reduce((sum, item) => sum + item.quantity, 0)
})

export const selectCartTotal = createSelector([selectCartItems], (items) => {
  return Object.values(items).reduce((sum, item) => sum + item.product.price * item.quantity, 0)
})


