import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductModel } from '../models/product.model';
import { createProductAction } from '../store/product/product.slice';

export const fetchProductsApi = createAsyncThunk<ProductModel[]>('products/fetch', async () => {
    const productData = await axios.get(PRODUCTS_URL);
    return productData.data;
});

export const createProductApi = createAsyncThunk(
    'products/createProduct',
    async (product: Partial<ProductModel>, { dispatch }) => {
        dispatch(createProductAction(product as ProductModel));
    }
);
