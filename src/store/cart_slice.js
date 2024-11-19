import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);
        if (!existingItem) {
            return;
        }
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
            state.items = state.items.filter(item => item.id !== id)
        } else {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
        }
    },
  },
});

// these exports should stay the way they are
export const cartActions = cartSlice.actions;

export default cartSlice; 
