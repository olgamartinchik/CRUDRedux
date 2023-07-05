import { memo, useCallback } from 'react';
import Modal from '../../modal/modal.component';
import { NEW_PRODUCT_MODAL_TITLE } from '../../../constants/props.constants';
import ProductCreationForm from '../../form/create-form.component';
import CreateButton from '../../button/create-btn.component';
import { ProductModel } from '../../../models/product.model';
import { useDispatch } from 'react-redux';
import useModal from '../../../hooks/modal.hook';
import { createProductApi } from '../../../services/product-api.service';

const ProductCreationContainer = () => {
    // const [visibleModal, setVisibleModal] = useState(false);
    const { visibleModal, onToggleModal } = useModal();
    const dispatch = useDispatch();

    // const onToggleModal = useCallback(() => {
    //     setVisibleModal(!visibleModal);
    // }, [visibleModal]);

    // const onOpen = useCallback(() => {
    //     setVisibleModal(!visibleModal);
    // }, [visibleModal]);

    const handleSubmit = useCallback(
        (product: Partial<ProductModel>) => {
            // dispatch(createProductAction(product as ProductModel));
            dispatch(createProductApi(product) as any);
            // setVisibleModal(false);
            onToggleModal();
        },
        [dispatch, onToggleModal]
    );

    return (
        <div>
            <Modal visible={visibleModal} title={NEW_PRODUCT_MODAL_TITLE} onClose={onToggleModal}>
                <ProductCreationForm onSubmit={handleSubmit} />
            </Modal>
            <CreateButton onOpen={onToggleModal} />
        </div>
    );
};
export default memo(ProductCreationContainer);
