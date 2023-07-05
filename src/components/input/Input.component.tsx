import './input.component.css';
import { ChangeEvent, FC, InputHTMLAttributes, memo, useCallback, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    innerClassName?: string;
}
const Input: FC<InputProps> = ({ innerClassName, ...rest }) => {
    const [innerValue, setInnerValue] = useState('');

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setInnerValue(event.target.value);
        // console.log(innerValue);
    }, []);

    return <input value={innerValue} onChange={handleChange} className={innerClassName} {...rest} />;
};
export default memo(Input);
