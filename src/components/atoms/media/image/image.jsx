import React from "react"
import { string, func, bool, oneOf } from "prop-types"
import { StyledImgContainer, StyledImage, ImageElement, ImageCover } from "./image.styled"

const componentID = `a-image`
const Image = ({ width, height, sourceUrl, className, onClick, isFullImg, bgType, imgClass }) => {
  return (
    <StyledImgContainer className={`${componentID} ${className}`} width={width} height={height}>
      <StyledImage>{isFullImg ? <ImageCover src={sourceUrl} onClick={onClick} bgType={bgType} className={imgClass} /> : <ImageElement src={sourceUrl} />}</StyledImage>
    </StyledImgContainer>
  )
}

Image.propTypes = {
  sourceUrl: string.isRequired,
  width: string,
  height: string,
  className: string,
  placeHolder: string,
  onClick: func,
  isFullImg: bool,
  bgType: oneOf(["cover", "contain"]),
}

Image.defaultProps = {
  isFullImg: true,
  width: "50px",
  height: "50px",
  className: "",
  onClick: () => {},
  bgType: "contain",
}

export default Image
