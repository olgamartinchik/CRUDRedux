import styled from 'styled-components';
import { baseTheme } from './theme.styles';

export const ModalHeader = styled.header`
    width: 100%;
    border-bottom: 1px solid ${baseTheme.colors.primary};
`;
export const ModalWrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${baseTheme.colors.modalWrapperbg};
    z-index: 2;
`;
export const ModalContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 6px;
    padding: 25px 40px;
    box-sizing: border-box;
    max-width: 550px;
    width: 100%;
    background-color: ${baseTheme.colors.bg};

    svg {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 27px;
        height: 27px;
        cursor: pointer;
        opacity: 1;
        &:hover {
            opacity: 0.7;
        }
    }
`;
