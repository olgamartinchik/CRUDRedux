import { useEffect } from 'react';
import { ProductModel } from '../models/product.model';

import { fetchProductsApi } from '../services/product-api.service';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';

type UseProductsType = {
    products: ProductModel[];
    loading?: boolean;
    error?: string | null;
};
function useProducts(): UseProductsType {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product);

    useEffect(() => {
        dispatch(fetchProductsApi() as any);
    }, [dispatch]);

    return { ...products };
}
export default useProducts;
