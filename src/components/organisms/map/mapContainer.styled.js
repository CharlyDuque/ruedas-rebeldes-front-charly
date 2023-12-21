import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"

export const StyledMapContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  @media ${deviceSizes.md} {
    display: flex;
    flex-flow: row-reverse;

    .o-map-container-footer-top {
      display: none;
    }
  }
`
