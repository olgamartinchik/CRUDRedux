import { CircularProgress } from '@mui/material';
import { memo } from 'react';
import { ProductContainer } from '../../../assets/styles/product-container.styles';
import useProducts from '../../../hooks/products.hook';
import ProductList from './product-list.component';

import ProductCreationContainer from '../card/create-product.component';

const ProductListContainer = () => {
    const { products, loading, error } = useProducts();

    return (
        <ProductContainer>
            {loading && <CircularProgress />}
            {error ? <div>{error}</div> : <ProductList products={products} />}

            <ProductCreationContainer />
        </ProductContainer>
    );
};
export default memo(ProductListContainer);
