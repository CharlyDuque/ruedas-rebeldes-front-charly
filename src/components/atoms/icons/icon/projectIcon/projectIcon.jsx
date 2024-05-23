import React from "react"
import { string, oneOf, func } from "prop-types"
import TestIcon from "../../../svgs/testIcon"
import Fb from "../../../svgs/fb"
import Apoya from "../../../svgs/apoya"
import Pin from "../../../svgs/pin"
import Tienda from "../../../svgs/tienda"
import Tiktok from "../../../svgs/tiktok"
import Instagram from "../../../svgs/instagram"
import { StyledPorjectIcon } from "./projectIcon.styled"
import Twitter from "../../../svgs/twitter"
import Youtube from "../../../svgs/youtube"

const componentID = `a-icon-type`

const projectIcons = {
  testIcon: TestIcon,
  fb: Fb,
  apoya: Apoya,
  pin: Pin,
  tienda: Tienda,
  tiktok: Tiktok,
  twitter: Twitter,
  youtube: Youtube,
  instagram: Instagram,
}

const ProjectIcon = ({ id, color, onClick, className, width, height, fill }) => {
  const Icon = projectIcons[id] === undefined ? null : projectIcons[id]

  if (!Icon) return null

  return (
    <StyledPorjectIcon className={`${componentID} ${className}`} color={color} widthElement={width} heightElement={height}>
      <Icon onClick={onClick} fill={fill} />
    </StyledPorjectIcon>
  )
}

ProjectIcon.propTypes = {
  id: oneOf(["testIcon", "fb", "apoya", "pin", "tienda", "tiktok", "twitter", "youtube", "instagram"]),
  color: string,
  className: string,
  onClick: func,
  width: string,
  height: string,
  fill: string,
}

ProjectIcon.defaultProps = {
  id: "fb",
  color: "#333333",
  className: "",
  onClick: () => {},
  width: "30px",
  height: "auto",
}

export default ProjectIcon
