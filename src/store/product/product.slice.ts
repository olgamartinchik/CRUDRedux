import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from '../../models/state/product-state.model';
import { ProductModel } from '../../models/product.model';
import { createProductApi, fetchProductsApi } from '../../services/product-api.service';

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
        builder.addCase(fetchProductsApi.pending, state => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProductsApi.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProductsApi.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(createProductApi.pending, state => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createProductApi.fulfilled, state => {
            state.loading = false;
        });
        builder.addCase(createProductApi.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

// Action creators are generated for each case reducer function
export const { setProductsAction, createProductAction } = productSlice.actions;

export default productSlice.reducer;
