import styled from "styled-components"

export const StyledImgContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: block;
`

export const ImageElement = styled.img``

export const ImageCover = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => props.bgType};
  display: block;
  height: 100%;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

export const StyledImage = styled.div`
  display: block;
  height: 100%;
  position: relative;
  width: 100%;
`
