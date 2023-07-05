import { FC, memo } from 'react';
import { CreateBtn } from '../../assets/styles/create-btn.styles';
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';

type CreateButtonProps = {
    onOpen: () => void;
};
const CreateButton: FC<CreateButtonProps> = ({ onOpen }) => {
    return (
        <CreateBtn onClick={onOpen}>
            <CloseIcon />
        </CreateBtn>
    );
};
export default memo(CreateButton);
