import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"

export const StyledFooter = styled.footer`
  min-height: 100px;
`

export const StyledRigthConteiner = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  .o-footer__img-bcjb {
    margin-bottom: 7px;
  }

  @media ${deviceSizes.sm} {
    .o-footer__img-bcjb {
      margin-bottom: 20px;
    }
  }

  @media ${deviceSizes.md} {
  }

  @media ${deviceSizes.lg} {
    .o-footer__img-bcjb {
      height: 60px;
    }
  }

  @media ${deviceSizes.xl} {
  }
`

export const StyledLeftConteiner = styled.div`
  .o-footer__img-ruedas {
    margin-bottom: 7px;
  }

  @media ${deviceSizes.sm} {
    .o-footer__img-ruedas {
      margin-bottom: 20px;
    }
  }

  @media ${deviceSizes.md} {
  }

  @media ${deviceSizes.lg} {
    .o-footer__img-ruedas {
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
