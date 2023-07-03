import { useEffect, useRef, useState } from 'react';
import { ProductModel } from '../models/product.model';
// import { selectProducts } from '../models/state/products/product.selectors';
import { fetchProductsApi } from '../services/product-api.service';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setProductsAction } from '../store/product/product.slice';
type UseProductsType = {
    products: ProductModel[];
    loading: boolean;
    error: string;
};
function useProducts(): UseProductsType {
    // const [products, setProducts] = useState<ProductModel[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const productRef = useRef<ProductModel[] | null>(null);
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product.products);

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                const productData = await fetchProductsApi();
                productData && setLoading(false);
                productRef.current = productData.data;
                // setProducts(cardData.data)

                dispatch(setProductsAction(productData.data));

                // console.log('product', products)
            } catch (error: unknown) {
                setError(`Something went wrong! Error: ${error as Error}`);
            } finally {
            }
        }
        fetchProducts();
    }, []);

    return { products, loading, error };
}
export default useProducts;
