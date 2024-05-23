import styled from "styled-components"

export const StyledButton = styled.button`
  background-color: ${props => props.btnColor};
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
