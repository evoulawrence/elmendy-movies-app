import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AddToPlaylist = styled.button`
  font-size: 16px;
  text-align: center;
  width: 200px;
  font-weight: 600;
  padding: 4px;
  border-radius: 10px;
  background: var(--lightGray);
  color: var(--darkGray);
  cursor: pointer;
  margin-top: 6px;
  border-radius: 1px solid #353535;
  border: 1px solid var(--darkGray);
`
export const InPlaylist = styled.button`
  font-size: 16px;
  text-align: center;
  width: 200px;
  font-weight: 600;
  padding: 4px;
  border-radius: 10px;
  background: var(--mediumGray);
  color: var(--lightGray);
  margin-top: 6px;
  border-radius: 1px solid #353535;
  cursor: not-allowed;
  border: 1px solid var(--mediumGray);
`