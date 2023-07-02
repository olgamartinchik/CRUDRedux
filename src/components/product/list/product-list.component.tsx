import { FC, memo } from "react"
import { ProductModel } from "../../../models/product.model";
import ProductCard from '../card/product-card.component'

type ProductListProp = {
    products: ProductModel[]};
const ProductList: FC<ProductListProp> = ({products}) => {
    return(
        <ul>
            {products.map(product => <ProductCard key={product.id} {...product}/>)}
        </ul>
    )

}
export default memo(ProductList)