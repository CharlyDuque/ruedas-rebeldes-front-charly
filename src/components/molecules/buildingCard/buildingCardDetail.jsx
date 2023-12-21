import React from "react"
import { StyledBuildingCardDetail, TypeText, StatusContainer, DescItem, DetailWrapper } from "./buildingCardDetail.styled"
import ProjectIcon from "../../atoms/icons/icon/projectIcon/projectIcon"
import { useEffect } from "react"
import { useState } from "react"
import { vars } from "../../particles/themeDefault"
import TextButton from "../../atoms/buttons/textButton"

const componentId = `m-building-card-detail`

const BuildingCardDetail = ({ className, statusText, description, contractor, amount, status }) => {
  const [detailPinColor, setDetailPinColor] = useState(vars.brightGreen)

  useEffect(() => {
    if (!status) return

    switch (status) {
      case 1:
        setDetailPinColor(vars.brightGreen)
        break
      case 2:
        setDetailPinColor(vars.candlelight)
        break
      case 3:
        setDetailPinColor(vars.redOrange)
        break
      default:
        setDetailPinColor(vars.brightGreen)
    }
  }, [status, setDetailPinColor])

  return (
    <StyledBuildingCardDetail className={`${componentId} ${className}`} statusColor={detailPinColor}>
      <TypeText status={status}>Tipo de obra</TypeText>
      <DetailWrapper>
        <StatusContainer>
          <ProjectIcon id={`pin`} fill={detailPinColor} className={`pin-detail`} />
          <DescItem>
            <span>{`Estatus:`}</span>
            <p>{statusText}</p>
          </DescItem>
        </StatusContainer>
        <DescItem>
          <span>{`Descripción:`}</span>
          <p>{description}</p>
        </DescItem>
        <DescItem>
          <span>{`Contratista:`}</span>
          <p>{contractor}</p>
        </DescItem>
        <DescItem>
          <span>{`Importe a pagar:`}</span>
          <p>${amount}</p>
        </DescItem>
      </DetailWrapper>
      <TextButton className={`${componentId}-more-button-dk`} btnColor={detailPinColor}>
        más información
      </TextButton>
    </StyledBuildingCardDetail>
  )
}

BuildingCardDetail.propTypes = {}

BuildingCardDetail.defaultProps = {}

export default BuildingCardDetail
