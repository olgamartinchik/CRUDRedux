import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 15px 20px;
    background-color: #F0F8FF;
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
export const CardTitle = styled.h5`
    font-weight: bold;
    font-size: 18px;
`;
export const CardSubtitle = styled.h5`
    font-weight: bold;
    font-size: 20px;
`;