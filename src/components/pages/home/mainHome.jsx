import React from "react"
import { Col, Row, Container } from "react-awesome-styled-grid"
import Hero from "../../molecules/hero/hero"
import { StyledHomeMain } from "./mainHome.styled"
import logoMonitor from "../../../../static/assets/images/common/logo_monitor_02.png"
import MapContainer from "../../organisms/map/mapContainer"
import ShopBanner from "../../organisms/shopBanner/shopBanner"

const componentId = `p-home-main`
const mapClass = `m-map`

const MainHome = ({ buildings }) => {
  return (
    <><StyledHomeMain className={`${componentId}`}>
      <Container>
        <Row>
          <Col xs={4} sm={6} md={6} lg={6} xl={6} offset={{ sm: 1, md: 3, lg: 3, xl: 3 }}>
            <Hero srcImg={logoMonitor} title="Que no te atropelle la corrupción" detail="Investigamos posibles hechos de corrupción en las obras públicas enfocadas en movilidad. Porque las decisiones políticas y financieras impactan en la seguridad para caminar, andar en bici e, incluso, conducir un auto por las calles. " />
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={8} md={10} lg={10} xl={10} offset={{ sm: 0, md: 1, lg: 1, xl: 1 }}>
            <MapContainer buildings={buildings} />
          </Col>
        </Row>
        <Row>
          <ShopBanner />
        </Row>
      </Container>

    </StyledHomeMain><StyledHomeMain className={`${mapClass}`}>
        /</StyledHomeMain></>
  )
}

MainHome.propTypes = {}

MainHome.defaultProps = {}

export default MainHome