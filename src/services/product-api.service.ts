import axios, { AxiosResponse } from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductModel } from '../models/product.model';
// import type { RootState } from '../store/store'

// import { useSelector, useDispatch } from 'react-redux'
// import { setProductsAction } from '../store/product/product.slice'

export async function fetchProductsApi(): Promise<AxiosResponse<ProductModel[]>> {
    // const product = useSelector((state: RootState) => state.product)
    // const dispatch = useDispatch()
    // console.log('product',product)
    const productData = await axios.get(PRODUCTS_URL);
    // console.log('productData', productData);
    // dispatch(setProductsAction(productData.data))

    return productData;
}
