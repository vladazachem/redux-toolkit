import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui_slice';
import cartReducer from './cart_slice';

const store = configureStore({
    reducer: {
        ui: uiReducer.reducer,
        cart: cartReducer.reducer
    }
});


export default store;
