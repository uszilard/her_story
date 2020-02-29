import styled from "styled-components"
import { Card } from "react-rainbow-components";

const borderRadius = 7


export const Input = styled.Quote1`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px;
  padding: 0.5rem;
  border: 1px solid pink;
  border-radius: ${borderRadius}px;
  width: -webkit-fill-available;
  font-size: 16px;
  margin-top: 5px;
`;
export const StyledCard = styled(Card)`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px;
  border-radius:  ${borderRadius}px;
  margin-top: 5px;
  
`;
export const Quote = styled.div`
  padding: 0.5rem;
  font-family: "Open Sans", sans-serif;
`;

export const Img = styled.img`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: -webkit-fill-available;
`;