import styled, { css } from "styled-components"
import { deviceSizes } from "../../../particles/mediaQueries"

export const StyledNavItem = styled.div`
  display: flex;
  padding: 0 10px;
  opacity: 0.8;
  font-weight: ${props => props.theme.vars.fontBold};

  font-family: ${props => props.theme.vars.roboto};
  font-size: 8px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;

  .a-icon-type {
    margin-right: 6px;
  }

  ${props =>
    props.hiddenMobile &&
    css`
      display: none;
    `}

  @media ${deviceSizes.sm} {
    display: flex;
    text-align: left;
    font-size: 12px;
  }

  @media ${deviceSizes.md} {
    &:hover {
      opacity: 1;
    }
  }
`
