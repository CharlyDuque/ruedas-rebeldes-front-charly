import React from "react"
import { Link } from 'gatsby';
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
          <NavItem url={`/noticias`} iconName="apoya">
            NOTICIAS
          </NavItem>
          <NavItem iconName="apoya">
            <Link to="/examplePage/">Metodologia</Link>
          </NavItem>
          <NavItem url={`/newsletter`} iconName="apoya">
            NEWSLETTER
          </NavItem>
          <NavItem url={`https://www.instagram.com/p/CrLjF-nN_C1/`} iconName="apoya">
            TIENDA
          </NavItem>
          <NavItem url={`https://www.ruedasrebeldes.com/quienes-somos/`} iconName="apoya">
            Quiénes somos
          </NavItem>

        </ItemsWrapper>
      </Navigation>
    </StyledNavBar>
  )
}

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar
