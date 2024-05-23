import React from "react"
import { StyledHeader } from "./header.styled"

const componentId = "o-header"
const Header = ({ children, className, solid }) => {
  return (
    <StyledHeader className={`${componentId} ${className}`} solid={solid}>
      {children}
    </StyledHeader>
  )
}

// Expected prop values
Header.propTypes = {}

Header.defaultProps = {}

export default Header

import React from "react"
import { StyledHeader } from "./header.styled"

const componentId = "o-header"
const Header = ({ children, className, solid }) => {
  return (
    <StyledHeader className={`${componentId} ${className}`} solid={solid}>
      {children}
    </StyledHeader>

  )
}

// Expected prop values
Header.propTypes = {}

Header.defaultProps = {}

export default Header
