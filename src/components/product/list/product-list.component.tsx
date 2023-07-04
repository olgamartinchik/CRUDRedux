import { FC, memo } from 'react';
import { List } from '../../../assets/styles/product-list.styles';
import { ProductModel } from '../../../models/product.model';
import ProductCard from '../card/product-card.component';

type ProductListProp = {
    products: ProductModel[];
};
const ProductList: FC<ProductListProp> = ({ products }) => {
    return (
        <List>
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </List>
    );
};
export default memo(ProductList);
