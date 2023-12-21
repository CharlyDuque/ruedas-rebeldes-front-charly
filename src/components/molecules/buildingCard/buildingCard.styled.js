import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"

export const StyledBuildingCard = styled.div`
  display: flex;
  background-color: ${props => props.theme.vars.mercury};
  padding: 0 0 10px 10px;

  @media ${deviceSizes.md} {
    flex-flow: column;
    width: 30%;
    padding: 10px 10px 10px 10px;
    margin-right: 10px;
  }
`
