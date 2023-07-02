import { CircularProgress } from "@mui/material";
import { memo} from "react";
import useProducts from "../../../hooks/products.hook";
import ProductList from './product-list.component'



const ProductListContainer = () => {
  const {products, loading, error}  = useProducts()

    return(
        <div>
            {loading && <CircularProgress />}
            {error ?
                <div>{error}</div>
                :
                <ProductList products={products}/>
            }
        </div>
    )
}
export default memo(ProductListContainer)