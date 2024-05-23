import React from "react"
import { StyledButton } from "./textButton.styled"
import { string } from "prop-types"
import { vars } from "../../particles/themeDefault"

const idComponent = `a-text-button`

const TextButton = ({ onClick, children, className, btnColor }) => {
  return (
    <StyledButton onClick={onClick} className={`${idComponent} ${className}`} btnColor={btnColor}>
      {children}
    </StyledButton>
  )
}

TextButton.propTypes = {
  btnColor: string,
}

TextButton.defaultProps = {
  btnColor: vars.brightGreen,
}

export default TextButton
