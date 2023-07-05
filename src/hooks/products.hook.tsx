import { useEffect } from 'react';
import { ProductModel } from '../models/product.model';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoadingError, selectProducts } from '../models/state/products/product.selectors';
import { fetchProducts } from '../store/actions';

type UseProductsType = {
    products: ProductModel[];
    loading?: boolean;
    error?: string | null;
};
function useProducts(): UseProductsType {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const errorLoading = useSelector(selectLoadingError);

    useEffect(() => {
        dispatch(fetchProducts() as any);
    }, [dispatch]);

    return { products, ...errorLoading };
}
export default useProducts;
