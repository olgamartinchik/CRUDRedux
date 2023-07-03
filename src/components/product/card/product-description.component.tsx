import { FC, memo, useState } from 'react';
import { Button } from '@mui/material';
import { CardText } from '../../../assets/styles/card.styles';
import { MAX_LENGTH } from '../../../constants/props.constants';
import { OUTLINED } from '../../../constants/styles.constants';

type DescriptionProps = {
    text: string;
    maxLength?: number;
};

const Description: FC<DescriptionProps> = ({ text, maxLength = MAX_LENGTH }) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <CardText>
                {maxLength > MAX_LENGTH && !isShow ? text.split('').splice(0, MAX_LENGTH).join('') + '...' : text}
            </CardText>
            {maxLength >= MAX_LENGTH && (
                <Button variant={OUTLINED} onClick={() => setIsShow(!isShow)}>
                    {isShow ? 'Hide' : 'Show Details'}
                </Button>
            )}
        </>
    );
};
export default memo(Description);
