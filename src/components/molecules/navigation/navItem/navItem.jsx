import React from "react"
import { bool, func, string } from "prop-types"
import { StyledNavItem } from "./naveItem.styled"
import ProjectIcon from "../../../atoms/icons/icon/projectIcon/projectIcon"
import { Link } from "gatsby"

const componentID = `m-nave-element`

const NavItem = ({ children, className, iconName, onClick, url, hiddenMobile }) => {
  return (
    <Link to={url}>
      <StyledNavItem className={`${className} ${componentID}`} onClick={onClick} hiddenMobile={hiddenMobile}>
        {iconName && <ProjectIcon id={iconName} />}
        {children}
      </StyledNavItem>
    </Link>
  )
}

NavItem.propTypes = {
  className: string,
  iconName: string,
  onClick: func,
  url: string,
  hiddenMobile: bool,
}

NavItem.defaultProps = {
  className: "",
  iconName: "",
  onClick: () => {},
  url: "/",
  hiddenMobile: false,
}

export default NavItem
