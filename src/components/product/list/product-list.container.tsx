import { CircularProgress } from '@mui/material';
import { memo, useEffect } from 'react';
import { ProductContainer } from '../../../assets/styles/product-container.styles';
import useProducts from '../../../hooks/products.hook';
import ProductList from './product-list.component';
import Modal from '../../modal/modal.component';
import ProductCreationContainer from '../card/create-product.component';
import useModal from '../../../hooks/modal.hook';

const ProductListContainer = () => {
    const { products, loading, error } = useProducts();
    const { visibleModal, onToggleModal } = useModal();
    const title = 'Something went wrong!';
    useEffect(() => {
        if (error) {
            onToggleModal();
        }
    }, [error, onToggleModal]);
    return (
        <ProductContainer>
            {loading && <CircularProgress />}
            {error ? (
                <Modal title={title} visible={visibleModal} onClose={onToggleModal}>
                    <p>{error}</p>
                </Modal>
            ) : (
                <ProductList products={products} />
            )}

            <ProductCreationContainer />
        </ProductContainer>
    );
};
export default memo(ProductListContainer);
