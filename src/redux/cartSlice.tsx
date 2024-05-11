import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("addedProducts")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        state.cart.push(action.payload);
        localStorage.setItem("addedProducts", JSON.stringify(state.cart));
      }
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("addedProducts", JSON.stringify(state.cart));
    },
  },
});

export const { addProduct, removeCart } = cartSlice.actions;
export { cartSlice };
