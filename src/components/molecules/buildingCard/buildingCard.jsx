import React from "react"
import { StyledBuildingCard } from "./buildingCard.styled"
import BuildingCardHeader from "./buildingCardHeader"
import BuildingCardDetail from "./buildingCardDetail"
import { number, object, string } from "prop-types"
import defaulImage from "../../../../static/assets/images/common/logo_monitor_02.png"

const componentId = `m-building-card`

const BuildingCard = ({ className, building, srcImg }) => {
  return (
    <StyledBuildingCard className={`${componentId} ${className}`}>
      <BuildingCardHeader status={building.status} srcImg={srcImg} />
      <BuildingCardDetail status={building.status} amount={building.amount} description={building.description} contractor={building.contractor} statusText={building.statusText} />
    </StyledBuildingCard>
  )
}

BuildingCard.propTypes = {
  building: object,
  srcImg: string,
}

BuildingCard.defaultProps = {
  building: { status: 1 },
  srcImg: defaulImage,
}

export default BuildingCard
