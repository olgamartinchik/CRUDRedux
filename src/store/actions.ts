import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductModel } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';
import { createProductAction } from './product/product.slice';

export const fetchProducts = createAsyncThunk('products/fetch', async (_, {}) => {
    try {
        const data = await fetchProductsApi();
        return data;
    } catch (e) {
        return e;
    }
});
export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product: Partial<ProductModel>, { dispatch }) => {
        dispatch(createProductAction(product as ProductModel));
    }
);
