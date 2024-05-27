import styled from "styled-components"


export const StyledHomeMain = styled.main`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  .p-home-main{
    color: white;
  }
    h1.title-red {
    color: red;
    text-align: center;
  }

`
export const StyledHeroBG = styled.main`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

`


export const StyledBackgroundImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
