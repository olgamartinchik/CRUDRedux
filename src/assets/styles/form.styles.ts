import styled, { css } from 'styled-components';
import { baseTheme } from './theme.styles';

const Flex = css`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Form = styled.form`
    ${Flex}
    align-items: center;
    gap: 20px;
`;
export const InputContainer = styled.div`
    ${Flex}
    align-items: flex-start;
    gap: 5px;

    span {
        color: ${baseTheme.colors.danger};
        font-size: 13px;
        height: 20px;
    }
`;
export const Label = styled.label`
    font-weight: 500;
`;
