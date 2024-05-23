import React from "react"
import { StyledBuildingCardHeader, TypeText, ImgContainer } from "./buildingCardHeader.styled"
import Image from "../../atoms/media/image/image"
import { number, string } from "prop-types"
import TextButton from "../../atoms/buttons/textButton"
import { useState } from "react"
import { vars } from "../../particles/themeDefault"
import { useEffect } from "react"
import defaulImage from "../../../../static/assets/images/common/logo_monitor_02.png"
const componentId = `m-building-card-header`
const BuildingCardHeader = ({ className, status, srcImg }) => {
  const [btnColor, setBtnColor] = useState(vars.brightGreen)

  useEffect(() => {
    if (status == null) return
    switch (status) {
      case 1:
        setBtnColor(vars.brightGreen)
        break
      case 2:
        setBtnColor(vars.candlelight)
        break
      case 3:
        setBtnColor(vars.redOrange)
    }
  }, [status])

  useEffect(() => {
    loadImage(srcImg)
  }, [srcImg])

  const [imageImported, setimageImported] = useState(null)

  const loadImage = userid => {
    import(`../../../../static/assets/images/obras/${userid}`)
      .then(image => {
        setimageImported(image.default)
      })
      .catch(() => {
        setimageImported(null)
      })
  }

  return (
    <StyledBuildingCardHeader className={`${componentId} ${className}`}>
      <ImgContainer>
        <Image sourceUrl={imageImported ? imageImported : defaulImage} width="100%" height="100%" bgType="contain" className={`card-img`} />
        <TextButton className={`${componentId}-more-button-mb`} btnColor={btnColor}>
          más información
        </TextButton>
      </ImgContainer>
      <TypeText status={status}>Tipo de obra</TypeText>
    </StyledBuildingCardHeader>
  )
}

BuildingCardHeader.propTypes = {
  status: number,
  srcImg: string,
}

BuildingCardHeader.defaultProps = {}

export default BuildingCardHeader
