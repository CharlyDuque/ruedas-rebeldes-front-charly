import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"
export const StyledHero = styled.div`
  margin-top: 50px;
  padding: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 50px;
  color:white;
  
  .m-hero__img {
    padding-right: 10px;
    width: 250px;
    height: auto;
    
  }

  @media ${deviceSizes.sm} {
    .m-hero__img {
      width: 20%;
    }
  }
`

export const StyledDetail = styled.div`
  padding-top: 25px;

  @media ${deviceSizes.sm} {
    width: 80%;
  }
`

export const StyledTitle = styled.h2`
  font-size: 15px;
  font-weight: ${props => props.theme.vars.fontBold};
  margin-bottom: 5px;

  @media ${deviceSizes.sm} {
    font-size: 30px;
  }

  @media ${deviceSizes.md} {
    font-size: 30px;
  }

  @media ${deviceSizes.lg} {
    font-size: 45px;
    margin-bottom: 10px;
  }

  @media ${deviceSizes.xl} {
    font-size: 50px;
  }
`

export const StyledDetailText = styled.p`
  font-size: 9px;
  font-weight: ${props => props.theme.vars.fontRegular};

  @media ${deviceSizes.sm} {
    font-size: 15px;
  }

  @media ${deviceSizes.md} {
    font-size: 15px;
  }

  @media ${deviceSizes.lg} {
    font-size: 20px;
  }

  @media ${deviceSizes.xl} {
    font-size: 25px;
  }
`
