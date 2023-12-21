import React from "react"
import { StyledNavBar, ItemsWrapper } from "./navBar.styled"
import NavItem from "../../molecules/navigation/navItem/navItem"
import Navigation from "../../molecules/navigation/nav/navigation"

const NavBar = props => {
  const { className } = props

  return (
    <StyledNavBar className={className}>
      <Navigation>
        <ItemsWrapper>
          <NavItem url={`/`} iconName="apoya">
            Inicio
          </NavItem>
          <NavItem url={`/metodologia`} iconName="apoya">
            Metodología
          </NavItem>
        </ItemsWrapper>
      </Navigation>
    </StyledNavBar>
  )
}

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar
