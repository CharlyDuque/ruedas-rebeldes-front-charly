import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"

export const StyledShopBanner = styled.div`
  height: 200px;
  width: calc(100% + 28px);
  background-color: ${props => props.theme.vars.black};
  position: relative;
  margin: 70px 0px;
  margin-left: -14px;
  margin-right: -14px;
  cursor: pointer;
  overflow: hidden;

  .shop_crop_img-bottom,
  .shop_crop_img-top {
    background-repeat: repeat;
    z-index: 2;
  }

  .shop_crop_img-top {
  }

  .shop_crop_img-bottom {
  }

  .o-shop-banner-img-top,
  .o-shop-banner-img-bottom {
    width: 100%;
    position: absolute;
  }

  .o-shop-banner-img-top {
    top: 0px;
  }

  .o-shop-banner-img-bottom {
    bottom: 0px;
  }

  .o-shop-banner-img-playeras {
    width: 50%;
    height: 100%;
    position: absolute;
    right: 6px;
    transition: all 2s ease-in-out;
  }

  &:hover {
    .o-shop-banner-img-playeras {
      transform: scale(1.1);
    }
  }

  @media ${deviceSizes.sm} {
    height: 300px;
  }

  @media ${deviceSizes.md} {
    height: 400px;

    .o-shop-banner-img-playeras {
      width: 70%;
    }
  }
`

export const TextShopContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  width: 150px;
  font-weight: ${props => props.theme.vars.fontBold};
  line-height: 13.5px;

  @media ${deviceSizes.sm} {
    width: 300px;
    line-height: unset;
  }

  @media ${deviceSizes.md} {
    width: 400px;
  }

  @media ${deviceSizes.lg} {
    width: 500px;
  }
`

export const ShopTitle = styled.h2`
  color: ${props => props.theme.vars.coralRed};
  font-size: 15px;
  margin-bottom: 5px;

  @media ${deviceSizes.sm} {
    font-size: 30px;
  }

  @media ${deviceSizes.md} {
    font-size: 40px;
    margin-bottom: 20px;
  }

  @media ${deviceSizes.lg} {
    font-size: 45px;
  }
`

export const ShopDesc = styled.p`
  font-size: 10px;
  color: ${props => props.theme.vars.white};
  margin-bottom: 5px;

  @media ${deviceSizes.sm} {
    font-size: 25px;
  }

  @media ${deviceSizes.md} {
    margin-bottom: 20px;
  }

  @media ${deviceSizes.lg} {
    font-size: 30px;
  }
`

export const InstagramLink = styled.div`
  color: ${props => props.theme.vars.coralRed};
  display: flex;
  align-items: center;
  font-size: 9px;
  .insta-icon {
    width: 20px;
  }

  @media ${deviceSizes.sm} {
    font-size: 19px;

    .insta-icon {
      width: 23px;
    }
  }

  @media ${deviceSizes.md} {
    font-size: 20px;

    .insta-icon {
      margin-right: 5px;
    }
  }

  @media ${deviceSizes.lg} {
    font-size: 22px;

    .insta-icon {
      width: 25px;
    }
  }
`
