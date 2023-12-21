import styled, { css } from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 9;
  height: 48px;
  padding: 0 16px;
  width: calc(100% - 32px);
  transition-duration: 0.25s;
  transition-timing-function: ease;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${props => props.theme.vars.white};
    opacity: 0;
    transition-duration: 0.25s;
    transition-timing-function: ease;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: calc(100% - 32px);
    height: 2px;
    background-color: ${props => props.theme.vars.black};
    opacity: 0.5;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    @media ${deviceSizes.sm} {
      width: calc(100% - 48px);
    }
  }

  ${props => {
    if (props.solid) {
      return css`
        &:before {
          opacity: 1;
        }
        &:after {
          opacity: 0;
        }
      `
    }
  }}

  @media ${deviceSizes.sm} {
    height: 70px;
    width: calc(100% - 96px);
    padding: 0 48px;
  }
  @media ${deviceSizes.lg} {
    height: 65px;
  }
  @media ${deviceSizes.xl} {
    height: 100px;
  }
`
