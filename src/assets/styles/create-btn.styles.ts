import styled from 'styled-components';
import { baseTheme } from './theme.styles';

export const CreateBtn = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 15px;
    bottom: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${baseTheme.colors.primary};
    cursor: pointer;
    z-index: 1;
    opacity: 1;
    &:hover {
        opacity: 0.8;
    }
    svg {
        transform: rotate(45deg);
    }
`;
