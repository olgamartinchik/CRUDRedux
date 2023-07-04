import { FC, memo, ReactNode } from 'react';
import { ModalContainer, ModalWrapper, ModalHeader } from '../../assets/styles/modal.styles';
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';

type ModalProps = {
    children?: ReactNode;
    visible: boolean;
    title: string;
    onClose: () => void;
};
const Modal: FC<ModalProps> = ({ visible, title, onClose, children }) => {
    if (!visible) {
        return null;
    }
    return (
        <ModalWrapper onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <CloseIcon onClick={onClose} />
                <ModalHeader>
                    <h2>{title}</h2>
                </ModalHeader>
                {children}
            </ModalContainer>
        </ModalWrapper>
    );
};
export default memo(Modal);
