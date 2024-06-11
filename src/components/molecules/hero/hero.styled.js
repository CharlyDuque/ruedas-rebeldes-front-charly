import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"
export const StyledHero = styled.div`
  margin-top: 10px;
  padding: 5px;
  width: 100%;
  height: 500px;
  display: flex;
  color:white;  
   @media ${deviceSizes.xs}{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
     }
  .m-hero{
    height: 600px;
    
  }
  .m-hero__img {
    padding-right: 2em;
    width: 200px;
    height: auto;
    
  }

  @media ${deviceSizes.sm} {
    .m-hero__img {
      /* width: 10em; */
    }
  }
`

export const StyledDetail = styled.div`
  padding-top: 25px;
  margin: 10px;
    @media ${deviceSizes.sm} {
    width:80%;
    margin: auto;
  }
  

`

export const StyledTitle = styled.h2`
  font-size: 30px;
  font-weight: ${props => props.theme.vars.fontBold};
  margin-bottom: 5px;

  @media ${deviceSizes.sm} {
    font-size: 30px;
  }

  @media ${deviceSizes.md} {
    font-size: 30px;
  }

  @media ${deviceSizes.lg} {
    font-size: 80px;
    margin-bottom: 10px;
  }

  @media ${deviceSizes.xl} {
    font-size: 80px;
  }
`

export const StyledDetailText = styled.p`
  font-size: 25px;
  font-weight: ${props => props.theme.vars.fontRegular};

  @media ${deviceSizes.sm} {
    font-size: 30px;
  }

  @media ${deviceSizes.md} {
    font-size: 35px;
  }

  @media ${deviceSizes.lg} {
    font-size: 35px;
  }

  @media ${deviceSizes.xl} {
    font-size: 35px;
  }
`
