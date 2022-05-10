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

export const Text = styled.div`
    display: flex;
`