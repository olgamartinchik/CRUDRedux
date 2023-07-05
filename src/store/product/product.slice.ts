import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from '../../models/state/product-state.model';
import { ProductModel } from '../../models/product.model';
import { createProduct, fetchProducts } from '../actions';

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
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
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload as any;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(createProduct.pending, state => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createProduct.fulfilled, state => {
            state.loading = false;
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

// Action creators are generated for each case reducer function
export const { setProductsAction, createProductAction } = productSlice.actions;

export default productSlice.reducer;
