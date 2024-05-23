import styled, { css } from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"

export const StyledBuildingCardHeader = styled.div`
  width: 100%;
  text-align: center;
  background-size: contain;

`
//icono principal mapa
export const TypeText = styled.p`
  font-weight: ${props => props.theme.vars.fontBold};
  font-family: ${props => props.theme.vars.roboto};
  color: ${props => props.theme.vars.white};
  text-align: center;
  ${props => {
    switch (props.status) {
      case 1:
        return css`
          background-color: ${props => props.theme.vars.brightGreen};
        `
        break
      case 2:
        return css`
          background-color: ${props => props.theme.vars.candlelight};
        `
        break
      case 3:
        return css`
          background-color: ${props => props.theme.vars.redOrange};
        `
        break
      default:
        return css`
          background-color: ${props => props.theme.vars.white};
        `
    }
  }}
  padding: 5px;
  display: none;

  @media ${deviceSizes.md} {
    display: block;
    padding: 15px 15px;
    text-align: start;
    font-size: 20px;
  }
`
export const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  .card-img {
    height: 200px;
  }
  .m-building-card-header-more-button-mb {
    margin-top: 5px;
    font-size: 10px;
    font-weight: ${props => props.theme.vars.fontBold};
    text-transform: uppercase;
  }

  @media ${deviceSizes.sm} {
    .m-building-card-header-more-button-mb {
      font-size: 12px;
    }
  }

  @media ${deviceSizes.md} {
    .m-building-card-header-more-button-mb {
      display: none;
    }
    .card-img {
      height: 315px;
    }
  }
`
