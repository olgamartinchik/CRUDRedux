import styled from 'styled-components';
import { baseTheme } from './theme.styles';

export const CardContainer = styled.li`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    padding: 20px;
    background-color: ${baseTheme.colors.cardbg};
    max-width: 450px;
    width: 100%;
    /* height: 220px; */
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: 0.5s ease-in-out;
    @media ${baseTheme.media.middle} {
        flex-wrap: wrap;
    }
`;
export const Img = styled.img`
    width: 120px;
    height: 120px;
`;
export const CardTitle = styled.h4`
    font-weight: bold;
    font-size: 18px;
    margin-top: 0;
`;
export const CardText = styled.p`
    font-size: 16px;
    transition: 0.5s ease-in-out;
`;
export const CardSubtitle = styled.h5`
    font-weight: bold;
    font-size: 20px;
    white-space: nowrap;
    margin-top: 0;
    color: ${baseTheme.colors.primary};
`;
export const AboutContent = styled.div`
    /* margin: 0;
    -webkit-line-clamp: 7;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden; */
`;
export const FlexContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
