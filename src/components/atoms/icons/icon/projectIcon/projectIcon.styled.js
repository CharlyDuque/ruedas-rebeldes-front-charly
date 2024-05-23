import styled from "styled-components"

export const StyledPorjectIcon = styled.span`
  color: ${props => props.color};
  display: block;
  width: ${props => props.widthElement};
  height: ${props => props.heightElement};
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`
