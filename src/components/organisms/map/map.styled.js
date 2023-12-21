import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"

export const MapWrapper = styled.div`
  height: 337px;
  background-color: ${props => props.theme.vars.mercury};
  //width: 100vw;
  //margin-left: -16px;
  padding: 10px;
  .m-map {
    height: 100%;
    width: 100%;
  }

  .buildings-marker-clusterer {
    div {
      width: 33px !important;
      top: -7px !important;
      left: 1px !important;
    }
  }

  .footer-bottom {
    display: none;
  }

  @media ${deviceSizes.sm} {
    //margin-left: -24px;
    height: 454px;
  }

  @media ${deviceSizes.md} {
    height: 700px;
    width: 70%;
    //margin-right: -24px;
    z-index: 1;
    display: flex;
    flex-flow: column;
    .m-map:before {
      content: "";
      position: absolute;
      display: block;
      box-shadow: -1px 0px 111px 0px rgba(0, 0, 0, 0.1);
      right: -100px;
      top: 0;
      bottom: 0;
      width: 100px;
      pointer-events: none;
      z-index: 5;
    }

    .footer-bottom {
      display: flex;
      background-color: ${props => props.theme.vars.wildSand};
      padding: 15px;
    }
  }

  @media ${deviceSizes.lg} {
    margin-right: 0px;
  }
`

export const LoadingElement = styled.div`
  height: 337px;
  @media ${deviceSizes.sm} {
    height: 454px;
  }
`
