import React from "react"
import { StyledHero, StyledDetail, StyledDetailText, StyledTitle } from "./hero.styled"
import Image from "../../atoms/media/image/image"
import { string } from "prop-types"
import themeDefault from "../../particles/themeDefault"

const componentId = `m-hero`
const Hero = ({ srcImg, title, detail, bgColor }) => {
  return (
    <StyledHero className={`${componentId}`} bgColor={bgColor}>

      <Image sourceUrl={srcImg} className={`${componentId}__img`} bgType="contain" />

      <StyledDetail className={`${componentId}__detail`}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDetailText>{detail}</StyledDetailText>
      </StyledDetail>
    </StyledHero>
  )
}

Hero.propTypes = {
  bgColor: string,
}

Hero.defaultProps = {
  bgColor: themeDefault.palette.bgColor,
}

export default Hero
