import { combineReducers } from "@reduxjs/toolkit";
import { ProductStateI } from "../interface/ProductInterface";
import productSlice from "./reducers/productSlice";

export type AppState = {
  products: ProductStateI;
}

const rootReducers = combineReducers({
  product: productSlice
})
export type RootReducers = ReturnType<typeof rootReducers>;
export default rootReducers;