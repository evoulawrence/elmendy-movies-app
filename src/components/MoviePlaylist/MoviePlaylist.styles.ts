import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 500px;
    @media screen and (max-width: 500px){
        width: 300px;
    }
`
export const Item = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 150px;
    margin-bottom: 20px;
    @media screen and (max-width: 500px){
        width: 140px;
    }
`
export const Poster = styled.img`
    height: 200px;
    width: 150px;
    @media screen and (max-width: 500px){
        width: 140px;
    }
`
export const Title = styled.span`
 font-size: 14px;
 font-weight: 600;
`
export const ReleaseDate = styled.span`
font-size: 14px;
font-weight: 400;
`
export const RemoveButton = styled.button`
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    padding: 2px;
    margin-top: 4px;
`