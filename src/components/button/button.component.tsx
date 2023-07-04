import './button.component.css';
import { ButtonHTMLAttributes, FC, memo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    innerClassName: string;
}

const Button: FC<ButtonProps> = ({ type, text, innerClassName }) => {
    return (
        <button type={type} className={innerClassName}>
            {text}
        </button>
    );
};
export default memo(Button);
