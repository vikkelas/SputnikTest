import { ProductI, ProductStateI } from "../../interface/ProductInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../helpers/defaultFunction";
import { LoadStatus } from "../../interface/Enums";

export const getProducts = createAsyncThunk<ProductI[]>("products/getProducta",
  async (_, thunkAPI) => {
  return getData<ProductI[]>(`${process.env.REACT_APP_SERVER_URL}/products`)
    .then()
    .catch(error => {
      console.log({ error });
      return thunkAPI.rejectWithValue({ message: error });
    });
});

const initialState: ProductStateI = {
  products: [],
  loadStatus: LoadStatus.IDLE,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state) => {
      state.error = null;
      state.loadStatus = LoadStatus.LOADING;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loadStatus = LoadStatus.LOADED;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loadStatus = LoadStatus.REJECTED;
    });

  },
});

export default productSlice.reducer;