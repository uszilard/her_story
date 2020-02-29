import styled from "styled-components"
import { Card } from "react-rainbow-components";


export const Input = styled.input`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px;

  padding: 0.5rem;
  border: 1px solid pink;
  border-radius: 9px;
  width: -webkit-fill-available;
  font-size: 16px;
  margin-top: 5px;
`;
export const StyledCard = styled(Card)`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px;
  border-radius: 7px;
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
  margin-top: 10px;
  max-width: -webkit-fill-available;
`;