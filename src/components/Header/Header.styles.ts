import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--darkGray);
    padding: 0 20px;
    position: fixed;
    z-index: 1000;
    width:100%
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.h1`
    width: 400px;
    font-weight: 700;
    font-size: 32px;
    @media screen and (max-width: 500px){
        width: 150px;
        font-size:16px;
    }
`;

export const MoviePlayListButton = styled.button`
    padding: 10px;
    border-radius: 10px;
    font-size:16px;
    font-weight:bold;
    background-color: #fff;
    color: var(--darkGray);
    cursor: pointer;
    @media screen and (max-width: 500px){
        width: 80px;
        font-size:14px;
        padding: 4px;
    }
`;

export const Modal = styled.div`
    z-index: 2000 !important;
`;

