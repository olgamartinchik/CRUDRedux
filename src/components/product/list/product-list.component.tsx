
import { FC, memo } from "react"
import { List } from "../../../assets/styles/ProductList.styles";
import { ProductModel } from "../../../models/product.model";
import ProductCard from '../card/product-card.component'

type ProductListProp = {
    products: ProductModel[]};
const ProductList: FC<ProductListProp> = ({products}) => {
    return(
        <List>
            {products.map(product => <li key={product.id}><ProductCard  {...product}/></li>)}
        </List>
    )

}
export default memo(ProductList)