import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"

export const StyledFooter = styled.footer`
  min-height: 100px;
`

export const StyledCenterConteiner = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-wrap: nowrap;
  align-items:stretch;
  margin:2em 0;
  .o-footer__icon{
    flex: inherit;
  }
  .o-footer__img {
    margin-bottom: 1em;
    width: 100%;
    height: 5em;
    object-fit: contain;
    flex-wrap: nowrap;
  }
  .a-icon-type {
    width: 20px;
  }

  @media ${deviceSizes.sm} {
    align-items:stretch;
    .o-footer__img {
      margin-bottom: .5em;
    }
  }

  @media ${deviceSizes.md} {
    align-items:stretch;
    flex-flow:;
  }

  @media ${deviceSizes.lg} {
    .o-footer__img {
      height: 60px;
    }
  }

  @media ${deviceSizes.xl} {
  }
`

export const StyledContact = styled.div`
  font-size: 9px;
  font-weight: ${props => props.theme.vars.fontBold};

  @media ${deviceSizes.sm} {
    font-size: 16px;
    padding: 0 20px;
  }

  @media ${deviceSizes.lg} {
    padding: 0 100px;
  }

  @media ${deviceSizes.xl} {
    padding: 0 200px;
    font-size: 17px;
  }
`

export const StyledSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  width: 120px;
  margin: 0 auto;
  .a-icon-type {
    width: 20px;
  }

  @media ${deviceSizes.sm} {
    align-self: center;
    width: 150px;
    .a-icon-type {
      width: 25px;
    }
  }

  @media ${deviceSizes.lg} {
    width: 200px;
    .a-icon-type {
      width: 30px;
    }
  }

`
export const StyleLowFooter = styled.div`
display: flex;
background-color: grey;
color: black;
  p{
    margin: 2em 40px;
    height: 6em;
  }
`