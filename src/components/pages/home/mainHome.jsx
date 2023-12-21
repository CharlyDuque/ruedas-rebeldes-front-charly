import React from "react"
import { Col, Row, Container } from "react-awesome-styled-grid"
import Hero from "../../molecules/hero/hero"
import { StyledHomeMain } from "./mainHome.styled"
import logoMonitor from "../../../../static/assets/images/common/logo_monitor.png"
import MapContainer from "../../organisms/map/mapContainer"
import ShopBanner from "../../organisms/shopBanner/shopBanner"

const componentId = `p-home-main`
const mapClass = `m-map`

const MainHome = props => {
  return (
    <StyledHomeMain className={`${componentId}`}>
      <Container>
        <Row>
          <Col xs={4} sm={6} md={6} lg={6} xl={6} offset={{ sm: 1, md: 3, lg: 3, xl: 3 }}>
            <Hero srcImg={logoMonitor} title="Que no te atropelle la corrupción" detail="Monitor de Movilidad Saltillo es una herramienta de Ruedas Rebeldes, con apoyo del Border Hub, para investigar posibles hechos de corrupción en las obras públicas enfocadas en la movilidad, porque las decisiones políticas y financieras impactan en la seguridad de las personas en las calles" />
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={8} md={10} lg={10} xl={10} offset={{ sm: 0, md: 1, lg: 1, xl: 1 }}>
            <MapContainer />
          </Col>
        </Row>
        <Row>
          <ShopBanner />
        </Row>
      </Container>
    </StyledHomeMain>
  )
}

MainHome.propTypes = {}

MainHome.defaultProps = {}

export default MainHome
