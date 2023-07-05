import { useCallback, useState } from 'react';

type UseModalType = {
    visibleModal: boolean;
    onToggleModal: () => void;
};
function useModal(): UseModalType {
    const [visibleModal, setVisibleModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setVisibleModal(visibleModal => !visibleModal);
    }, []);
    return { visibleModal, onToggleModal };
}
export default useModal;
