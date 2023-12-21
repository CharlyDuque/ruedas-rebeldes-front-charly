import React, { useEffect, useCallback, useState } from "react"
import { GoogleMap, Marker, MarkerClusterer, useJsApiLoader } from "@react-google-maps/api"
import mapConfig from "./mapConfig.json"
import { MapWrapper } from "./map.styled"
import { any, array, string } from "prop-types"
import MapFooter from "./mapFooter"

const API = process.env.MAP_KEY
const API_LIBRARIES = ["places"]
//const countryBounds = { lat: 23.6345005, long: -102.5527878 }
const pinsFolderPath = "/assets/images/pins/"

const Map = ({ building, buildings, className, setMapContext, setActiveBuildingKey, pinClick, setCurrentPin, currentPin, currentOverBuilding }) => {
  const [map, setMap] = useState(null)

  const mapOptions = {
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
  }

  const options = {
    imagePath: `${pinsFolderPath}markerclusterer/`,
    imageExtension: "png",
    imageSizes: [44],
    clusterClass: "buildings-marker-clusterer",
  }

  const fitBounds = useCallback(
    buildings => {
      if (buildings.length !== 0 && map !== null) {
        console.log("buildings ", buildings)
        let bounds
        bounds = new window.google.maps.LatLngBounds()
        buildings.map(_building => {
          if (_building !== null) {
            return bounds.extend(new window.google.maps.LatLng(_building.latitud, _building.longitud))
          } else {
            return 0
          }
        })

        map.fitBounds(bounds)
        if (buildings.length === 1) map.setZoom(15)
      }
    },
    [map]
  )

  const setOverInMarker = building => {
    setCurrentPin(building)
  }

  const setOverOutMarker = () => {
    setCurrentPin(null)
  }

  const hadleLoadMarker = building => {
    if (!building || !map) return

    window.google.maps.event.addListener(building.marker, "mouseover", () => {
      setOverInMarker(building)
    })
    window.google.maps.event.addListener(building.marker, "mouseout", () => {
      setOverOutMarker()
    })
  }

  const onLoadMap = useCallback(
    function callback(map) {
      map.zoom = 15
      setMap(map)
      setMapContext(map)
    },
    [setMap, setMapContext]
  )

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API,
    version: "3.53",
    libraries: API_LIBRARIES,
  })

  const getIconPath = buildingItem => {
    if (currentOverBuilding) {
      if (currentOverBuilding.id === buildingItem.id) return `${pinsFolderPath}pin_over.png`
    }
    console.log("buildingItem obtener color ", buildingItem)
    console.log("building obtener color ", building)
    if (!building) return getColorIcon(buildingItem.status)
    return building.id === buildingItem.id ? `${pinsFolderPath}pin_over.png` : getColorIcon(buildingItem.status)
  }

  const getColorIcon = status => {
    let iconPath = ""
    switch (status) {
      case 1:
        console.log("cayo en el 1 ", status)
        iconPath = `${pinsFolderPath}pin_1.png`
        break
      case 2:
        console.log("cayo en el 2 ", status)
        iconPath = `${pinsFolderPath}pin_2.png`
        break
      case 3:
        console.log("cayo en el 3 ", status)
        iconPath = `${pinsFolderPath}pin_3.png`
        break
      default:
        console.log("cayo en el default ", status)
        iconPath = `${pinsFolderPath}pin_1.png`
    }
    return iconPath
  }

  useEffect(() => {
    if (!map || buildings.length === 0 || building) return
    fitBounds(buildings)
  }, [buildings, map, fitBounds, building])

  useEffect(() => {
    if (!map || building === null) return
    fitBounds([building])
  }, [building, map, fitBounds])

  useEffect(() => {
    if (!currentPin) return
    currentPin.marker.setIcon({
      url: `${currentPin.marker.icon.url}`,
      size: new window.google.maps.Size(46, 54),
      point: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(28, 58),
      scaledSize: new window.google.maps.Size(46, 54),
    })
  }, [currentPin])

  return (
    <MapWrapper className="g-map-wrapper">
      {isLoaded ? (
        <GoogleMap onLoad={onLoadMap} zoom={5} options={mapOptions} mapContainerClassName={className} mapContainerStyle={{ styles: mapConfig }}>
          <MarkerClusterer options={options}>
            {clusterer => {
              return buildings.map((buildingItem, i) => {
                return (
                  <Marker
                    key={buildingItem.id + "-building"}
                    icon={{
                      url: getIconPath(buildingItem),
                      size: new window.google.maps.Size(36, 44),
                      point: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(18, 48),
                      scaledSize: new window.google.maps.Size(36, 44),
                    }}
                    position={{ lat: Number(buildingItem.latitud), lng: Number(buildingItem.longitud) }}
                    clusterer={clusterer}
                    onClick={() => {
                      pinClick(buildingItem)
                      setActiveBuildingKey(i)
                    }}
                    onLoad={marker => {
                      hadleLoadMarker({
                        ...buildingItem,
                        marker: marker,
                      })
                    }}
                  />
                )
              })
            }}
          </MarkerClusterer>
        </GoogleMap>
      ) : (
        <></>
      )}
      <MapFooter className={`footer-bottom`} />
    </MapWrapper>
  )
}

Map.propTypes = {
  building: any,
  buildings: array,
  className: string,
}

Map.defaultProps = {
  building: null,
  buildings: [],
  className: "",
}

export default Map
