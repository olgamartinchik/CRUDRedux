import { useEffect, useState } from "react";
import { ProductModel } from "../models/product.model";
import { fetchProductsApi } from "../services/product-api.service";

type UseProductsType = {
    products: ProductModel[];
    loading: boolean;
    error: string;
}
function useProducts (): UseProductsType {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        async function fetchProducts () {
            try{
                setLoading(true)
                const cardData = await fetchProductsApi()
                setLoading(false)
                setProducts(cardData.data)

            }catch(error: unknown){
                setError(`Something went wrong! Error: ${error as Error}`)
            }finally{}
            
        }
        fetchProducts()
    },[])

    return { products, loading, error }

}
export default useProducts