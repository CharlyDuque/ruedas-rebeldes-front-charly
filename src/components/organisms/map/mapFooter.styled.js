import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"

export const StyledMapFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.p`
  font-weight: ${props => props.theme.vars.fontBold};
  color: ${props => props.theme.vars.coralRed};
  font-size: 11px;
  text-align: center;

  @media ${deviceSizes.sm} {
    font-size: 22px;
  }
`

export const FooterItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin: 10px 0px;

  @media ${deviceSizes.sm} {
    max-width: none;
    margin: 20px 0px;
  }
`
