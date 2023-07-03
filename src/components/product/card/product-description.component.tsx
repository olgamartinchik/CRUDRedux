import { FC, memo, useCallback, useState, useMemo } from 'react';
import { Button } from '@mui/material';
import { CardText } from '../../../assets/styles/card.styles';
import { MAX_LENGTH } from '../../../constants/props.constants';
import { OUTLINED } from '../../../constants/styles.constants';

type DescriptionProps = {
    text: string;
    maxLength?: number;
};

const Description: FC<DescriptionProps> = ({ text, maxLength }) => {
    const [isShow, setIsShow] = useState(false);

    const showDescription = useCallback(() => {
        setIsShow(!isShow);
    }, [isShow]);

    const description = useMemo(() => {
        return maxLength! > MAX_LENGTH && !isShow ? text.split('').splice(0, MAX_LENGTH).join('') + '...' : text;
    }, [isShow, maxLength, text]);

    return (
        <>
            <CardText>{description!}</CardText>
            {maxLength! >= MAX_LENGTH && (
                <Button variant={OUTLINED} onClick={showDescription}>
                    {isShow ? 'Hide Details' : 'Show Details'}
                </Button>
            )}
        </>
    );
};
export default memo(Description);
