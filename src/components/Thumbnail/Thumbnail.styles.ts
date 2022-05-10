import styled from "styled-components";

// Types
type Props = {
  movieHeight?: boolean;
}

export const Image = styled.img<Props>`
  width: 100%;
  max-width: 720px;
  border-radius: 20px;
  transition: all 0.3s;
  object-fit: cover;
  height: ${({ movieHeight }) => (movieHeight ? `520px` : `auto`)};
  animation: animateThumb 0.5s;
  position: relative;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Info = styled.div`
  top: 5%;
  margin: 0px 10px;
  position: absolute;
  background: #000;
  width: 90%;
  opacity: 0.6;
  font-weight: 700;
  color: #fff;
  padding: 2px;
  display: flex;
  flex-direction: column;
  text-align: center;
` 
export const Title = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ReleaseDate = styled.span`
  font-size: 16px;
`;




