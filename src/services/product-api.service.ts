// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductModel } from '../models/product.model';
// import { createProductAction } from '../store/product/product.slice';

export const fetchProductsApi = async (): Promise<ProductModel[] | unknown> => {
    try {
        const productData = await axios.get(PRODUCTS_URL);
        return productData.data as ProductModel[];
    } catch (e: unknown) {
        return (e as Error).message;
    }
};
