import { FC, memo } from 'react';
import { CreateBtn } from '../../assets/styles/create-btn.styles';
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';
// import { Context } from '../../context/context';

type CreateButtonProps = {
    onOpen: () => void;
};
const CreateButton: FC<CreateButtonProps> = ({ onOpen }) => {
    // const { onClose } = useContext(Context);
    return (
        <CreateBtn onClick={onOpen}>
            <CloseIcon />
        </CreateBtn>
    );
};
export default memo(CreateButton);
