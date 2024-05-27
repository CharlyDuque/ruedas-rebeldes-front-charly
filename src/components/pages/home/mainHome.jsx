import React from "react"
import { Col, Row, Container } from "react-awesome-styled-grid"
import Hero from "../../molecules/hero/hero"
import { StyledHomeMain, StyledHeroBG, StyledBackgroundImage } from "./mainHome.styled"
import espacioroto from "../../../../static/assets/images/common/crop_top_gray.png"
import logoMonitor from "../../../../static/assets/images/common/logoMonitor_blanco.png"
import bgheader from "../../../../public/assets/images/common/m_2000_3.png"
import MapContainer from "../../organisms/map/mapContainer"
import ShopBanner from "../../organisms/shopBanner/shopBanner"

const componentId = `p-home-main`
const mapClass = `m-map`

const MainHome = ({ buildings }) => {
  return (
    <>
      <StyledHomeMain className={`${componentId}`}>
        <Container>

          <StyledHeroBG bgImage={bgheader}>
            <Row>
              <Col xs={4} sm={6} md={6} lg={6} xl={6} offset={{ sm: 1, md: 3, lg: 3, xl: 3 }}>
                <Hero srcImg={logoMonitor} title="Que no te atropelle la corrupción" detail="Investigamos posibles hechos de corrupción en las obras públicas enfocadas en movilidad. Porque las decisiones políticas y financieras impactan en la seguridad para caminar, andar en bici e, incluso, conducir un auto por las calles. " />
              </Col>
            </Row>

          </StyledHeroBG>
          <Row>
            <Row>
              <Col>
                <h1 className="title-red">DA CLICK PARA SABER MAS</h1>
              </Col>
            </Row>
            <Col xs={4} sm={8} md={10} lg={10} xl={10} offset={{ sm: 0, md: 1, lg: 1, xl: 1 }}>
              <MapContainer buildings={buildings} />
            </Col>
          </Row>
          <Row>
            <ShopBanner />
          </Row>
        </Container>

      </StyledHomeMain></>
  )
}

MainHome.propTypes = {}

MainHome.defaultProps = {}

export default MainHome