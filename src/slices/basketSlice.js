import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        ((basketItem) => basketItem.id === action.payload.id)
      );
      
      let newBasket = [...state.items]
      if (index >= 0 ) {
        // o item existe no carrinho

        newBasket.splice(index, 1)
      } else  {
        console.warn(`Não pode remover o produto (id: ${action.payload.id}) pois não está no carrinho`)
      }

      state.items = newBasket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
