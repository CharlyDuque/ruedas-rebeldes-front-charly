import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"
//background footer map text
export const StyledMapFooterItem = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .m-map-footer-item-icon {
    background-color: ${props => props.theme.vars.white};
    border-radius: 50%;
    padding: 2px;
    width: 10px;
  }

  @media ${deviceSizes.sm} {
    .m-map-footer-item-icon {
      width: 30px;
    }
  }
`

export const Text = styled.p`
  font-size: 5px;
  width: 65px;
  font-weight: ${props => props.theme.vars.fontBold};

  @media ${deviceSizes.sm} {
    font-size: 13px;
    width: 180px;
  }
`
