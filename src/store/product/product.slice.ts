import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from '../../models/state/product-state.model';
import { ProductModel } from '../../models/product.model';

const initialState: ProductState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;
        },
        createProductAction: (state, action: PayloadAction<ProductModel>) => {
            state.products = [action.payload, ...state.products];
        },
    },
});

// Action creators are generated for each case reducer function
export const { setProductsAction, createProductAction } = productSlice.actions;

export default productSlice.reducer;
