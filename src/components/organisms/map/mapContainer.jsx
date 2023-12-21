import React, { useState, useEffect } from "react"
import { StyledMapContainer } from "./mapContainer.styled"
import Map from "./map"
import BuildingCard from "../../molecules/buildingCard/buildingCard"
import MapFooter from "./mapFooter"
const componentId = `o-map-container`
const mapClass = `m-map`
const MapContainer = ({ className, buildings }) => {
  const [currentBuilding, setCurrentBuilding] = useState({ status: 1 })
  const [mapContext, setMapContext] = useState(null)
  const [activeBuildingKey, setActiveBuildingKey] = useState(null)
  const [currentPin, setCurrentPin] = useState(null)
  const [currentOverBuilding, setCurrentOverBuilding] = useState(null)

  const handleBuildingClick = building => {
    console.log("current", building)

    setCurrentBuilding(building)
  }

  useEffect(() => {
    console.log("MapContext -> ", mapContext)
  }, [mapContext])

  useEffect(() => {
    console.log("activeBuildingKey -> ", activeBuildingKey)
  }, [activeBuildingKey])

  useEffect(() => {
    console.log("currentPin -> ", currentPin)
  }, [currentPin])

  return (
    <StyledMapContainer className={`${componentId} ${className}`}>
      <MapFooter className={`${componentId}-footer-top`} />
      <Map className={`${mapClass}`} buildings={buildings} biulding={currentBuilding} pinClick={handleBuildingClick} setMapContext={setMapContext} setActiveBuildingKey={setActiveBuildingKey} setCurrentPin={setCurrentPin} currentPin={currentPin} currentOverBuilding={currentOverBuilding} />
      <BuildingCard building={currentBuilding} srcImg={currentBuilding.image} />
    </StyledMapContainer>
  )
}

MapContainer.propTypes = {}

MapContainer.defaultProps = {}

export default MapContainer
