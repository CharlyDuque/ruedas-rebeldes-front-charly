import React, { useState, useEffect } from "react"
import axios from "axios"
import { StyledMapContainer } from "./mapContainer.styled"
import Map from "./map"
import BuildingCard from "../../molecules/buildingCard/buildingCard"
import { useGetBuildings } from "../../particles/hooks/useGetBuildings"
import MapFooter from "./mapFooter"
import defaulImage from "../../../../static/assets/images/common/logo_monitor_02.png"
const componentId = `o-map-container`
const mapClass = `m-map`
const buildingImagesPath = "/assets/images/obras/"
const MapContainer = ({ className }) => {
  const [currentBuilding, setCurrentBuilding] = useState({ status: 1 })
  const [mapContext, setMapContext] = useState(null)
  const [activeBuildingKey, setActiveBuildingKey] = useState(null)
  const [currentPin, setCurrentPin] = useState(null)
  const [currentOverBuilding, setCurrentOverBuilding] = useState(null)

  const buildings = useGetBuildings()

  const handleBuildingClick = building => {
    console.log("current", building)

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost/Obras/Datos")
        console.log("response", response)
      } catch (error) {
        console.log("error", error)
      }
    }
    fetchData()

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
