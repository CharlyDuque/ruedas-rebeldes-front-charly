import React from "react"
import MapFooterItem from "../../molecules/map/mapFooterItem"
import { StyledMapFooter, Title, FooterItemsContainer } from "./mapFooter.styled"

const componentId = `m-map-footer`

const MapFooter = ({ className }) => {
  return (
    <StyledMapFooter className={`${componentId} ${className}`}>
      <Title>DA CLIC Y CONOCE TODOS LOS DETALLES DE LA OBRA</Title>
      <FooterItemsContainer>
        <MapFooterItem pinColor="#55D700" text={`La obra no tiene irregularidades hasta ahora.`} />
        <MapFooterItem pinColor="#FFD724" text={`La obra tiene irregularidades que no necesariamente están relacionadas con corrupción.`} />
        <MapFooterItem pinColor="#FF3838" text={`La obra tiene irregularidades relacionadas con presunta corrupción.`} />
      </FooterItemsContainer>
    </StyledMapFooter>
  )
}

MapFooter.propTypes = {}

MapFooter.defaultProps = {}

export default MapFooter
