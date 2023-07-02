import styled from "styled-components";
import { baseTheme } from './theme.styles'
export const CardContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    padding: 15px 20px;
    background-color: ${baseTheme.colors.cardbg};
    max-width: 450px;
    height: 220px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;
export const Img = styled.img`
    width: 120px;
    height: 120px;
`;
export const CardTitle = styled.h4`
    font-weight: bold;
    font-size: 18px;
`;
export const CardText = styled.p`  
    font-size: 16px;   
`;
export const CardSubtitle = styled.h5`
    font-weight: bold;
    font-size: 20px;
`;
export const AboutContent = styled.div`
     margin: 0;
    -webkit-line-clamp: 7;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
export const FlexContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
`;