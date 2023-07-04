import { memo, useCallback, useState } from 'react';
import Modal from '../../modal/modal.component';
import { NEW_PRODUCT_MODAL_TITLE } from '../../../constants/props.constants';
import ProductCreationForm from '../../form/create-form.component';
import CreateButton from '../../button/create-btn.component';
import { ProductModel } from '../../../models/product.model';
import { useDispatch } from 'react-redux';
// import { RootState } from '../../../store/store';
import { createProductAction } from '../../../store/product/product.slice';

const ProductCreationContainer = () => {
    const [visibleModal, setVisibleModal] = useState(false);
    const dispatch = useDispatch();

    const onClose = useCallback(() => {
        setVisibleModal(!visibleModal);
    }, [visibleModal]);

    const onOpen = useCallback(() => {
        setVisibleModal(!visibleModal);
    }, [visibleModal]);

    const handleSubmit = useCallback((product: Partial<ProductModel>) => {
        dispatch(createProductAction(product as ProductModel));
        setVisibleModal(false);
    }, []);

    return (
        <div>
            <Modal visible={visibleModal} title={NEW_PRODUCT_MODAL_TITLE} onClose={onClose}>
                <ProductCreationForm onSubmit={handleSubmit} />
            </Modal>
            <CreateButton onOpen={onOpen} />
        </div>
    );
};
export default memo(ProductCreationContainer);
