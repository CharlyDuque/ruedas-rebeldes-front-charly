import React from "react"
import { string } from "prop-types"
import { StyledNavigation } from "./navigation.styled"

const componentId = "m-navigation"
const Navigation = ({ className, children }) => {
  return <StyledNavigation className={className}>{children}</StyledNavigation>
}

Navigation.propTypes = {
  className: string,
}

Navigation.defaultProps = {
  className: componentId,
}

export default Navigation
