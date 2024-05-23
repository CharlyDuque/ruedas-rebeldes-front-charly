import React from "react"
import { StyledShopBanner, TextShopContainer, ShopTitle, ShopDesc, InstagramLink } from "./shopBanner.styled"
import Image from "../../atoms/media/image/image"
import backBottom from "../../../../static/assets/images/common/crop_bottom_black.png"
import backTop from "../../../../static/assets/images/common/crop_top_black.png"
import playeras from "../../../../static/assets/images/common/playeras.png"
import ProjectIcon from "../../atoms/icons/icon/projectIcon/projectIcon"

const idComponent = `o-shop-banner`
const instagramLink = `https://www.instagram.com/ruedasrebeldes/`

const ShopBanner = props => {
  const { className } = props

  const clickBanner = () => {
    window.open(instagramLink, "_blank")
  }

  return (
    <StyledShopBanner className={className} onClick={clickBanner}>
      <Image className={`${idComponent}-img-top`} sourceUrl={backBottom} bgType="contain" imgClass={`shop_crop_img-top`} />
      <Image className={`${idComponent}-img-bottom`} sourceUrl={backTop} bgType="contain" imgClass={`shop_crop_img-bottom`} />
      <Image className={`${idComponent}-img-playeras`} sourceUrl={playeras} bgType="cover" />
      <TextShopContainer>
        <ShopTitle>Tienda</ShopTitle>
        <ShopDesc>Lorem ipsum ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut</ShopDesc>
        <InstagramLink>
          <ProjectIcon id={`instagram`} fill={`#FF3B3B`} className={`insta-icon`} />
          @ruedasrebeldes
        </InstagramLink>
      </TextShopContainer>
    </StyledShopBanner>
  )
}

ShopBanner.propTypes = {}

ShopBanner.defaultProps = {}

export default ShopBanner
