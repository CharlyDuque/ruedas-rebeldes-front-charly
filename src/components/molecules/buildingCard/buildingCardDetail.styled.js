import styled, { css } from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"

export const StyledBuildingCardDetail = styled.div`
  margin-left: 5px;
  font-size: 10px;
  width: 125px;

  span {
    color: ${props => props.statusColor};
    font-weight: ${props => props.theme.vars.fontBold};
  }

  .m-building-card-detail-more-button-dk {
    display: none;
    width: 80%;
    font-weight: ${props => props.theme.vars.fontBold};
  }

  @media ${deviceSizes.sm} {
    width: 100%;
    font-size: 16px;
  }

  @media ${deviceSizes.md} {
    margin-left: 0px;
    font-size: 16px;

    .m-building-card-detail-more-button-dk {
      display: block;
    }
  }
`

export const TypeText = styled.p`
  font-weight: ${props => props.theme.vars.fontBold};
  font-family: ${props => props.theme.vars.roboto};
  color: ${props => props.theme.vars.white};
  text-align: center;
  font-size: 13px;
  margin-bottom: 5px;
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

  @media ${deviceSizes.sm} {
    width: 100%;
    font-size: 19px;
    padding: 5px 0;
  }

  @media ${deviceSizes.md} {
    display: none;
  }
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  .pin-detail {
    background-color: white;
    border-radius: 50%;
    padding: 4px;
    width: 20px;
    margin-right: 2px;
  }

  @media ${deviceSizes.sm} {
    .pin-detail {
      width: 30px;
    }
    align-items: flex-start;
  }

  @media ${deviceSizes.md} {
    .pin-detail {
      width: 40px;
    }
  }
`

export const DescItem = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  margin-bottom: 10px;
`

export const DetailWrapper = styled.div`
  @media ${deviceSizes.sm} {
    padding: 10px 40px;
  }

  @media ${deviceSizes.md} {
    padding: 10px 0px;
  }
`
