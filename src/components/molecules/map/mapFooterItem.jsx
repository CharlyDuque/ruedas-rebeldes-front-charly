import React from "react"
import { StyledMapFooterItem, Text } from "./mapFooterItem.styled"
import ProjectIcon from "../../atoms/icons/icon/projectIcon/projectIcon"
import { string } from "prop-types"

const componentId = `m-map-footer-item`

const MapFooterItem = ({ className, pinColor, text }) => {
  return (
    <StyledMapFooterItem className={`${componentId} ${className}`}>
      <ProjectIcon id="pin" fill={pinColor} className={`${componentId}-icon`} />
      <Text>{text}</Text>
    </StyledMapFooterItem>
  )
}

MapFooterItem.propTypes = {
  pinColor: string,
  text: string,
}

MapFooterItem.defaultProps = {
  pinColor: "#55D700",
}

export default MapFooterItem
