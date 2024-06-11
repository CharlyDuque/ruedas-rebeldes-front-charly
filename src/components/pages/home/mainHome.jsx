import React from "react"
import { Col, Row, Container } from "react-awesome-styled-grid"
import Hero from "../../molecules/hero/hero"
import { StyledHomeMain, StyledHeroBG, } from "./mainHome.styled"
import logoMonitor from "../../../../static/assets/images/common/logoMonitor_blanco.png"
import bgheader from "../../../../public/assets/images/common/m_2000_3.png"
import MapContainer from "../../organisms/map/mapContainer"
import ShopBanner from "../../organisms/shopBanner/shopBanner"
import CarouselComponent from '../../molecules/carrousel/carrousel';
import slides from '../../molecules/carrousel/slidesData';


const componentId = `p-home-main`
//const mapClass = `m-map`

const MainHome = ({ buildings }) => {
  return (
    <>
      <StyledHomeMain className={`${componentId}`}>
        <Container>

          <StyledHeroBG bgImage={bgheader}>

            <Row >
              <Col className={`${componentId}__wrapHeroL`} xs={1} sm={1} md={1} lg={1} xl={1} ></Col>
              <Col className={`${componentId}__wrapHeroMain`} xs={4} sm={9} md={9} lg={8} xl={9} offset={{ sm: 0, md: 1, lg: 1, xl: 0 }}>
                <Hero srcImg={logoMonitor} title="" detail="Investigamos posibles hechos de corrupción en las obras públicas de movilidad.
 " />
              </Col>
              <Col className={`${componentId}__wrapHeroL`} xs={1} sm={2} md={2} lg={1} xl={1} ></Col>
            </Row>
          </StyledHeroBG>
          <Row>
            <Row>
              <Col xs={4} sm={6} md={6} lg={6} xl={6} offset={{ sm: 1, md: 3, lg: 3, xl: 3 }}>
                <h1 className="title-red"> </h1>
                <p className="click">Identifica cómo se gasta el dinero público para construir la movilidad urbana de Saltillo, a quién beneficia y qué medio de transporte fomenta.
                  Monitor de Movilidad Saltillo es una herramienta de Ruedas Rebeldes, desarrollada con apoyo del Border Hub.
                  Da clic en un pin y conoce todos los detalles de las obras que se han realizado en la ciudad.
                </p>
              </Col>
              <Col xs={4} sm={6} md={6} lg={6} xl={6} offset={{ sm: 1, md: 3, lg: 3, xl: 3 }}>
                <p className="click">Da clic en un pin y conoce todos los detalles...</p></Col>
            </Row>
            <Col xs={4} sm={8} md={10} lg={10} xl={10} offset={{ sm: 0, md: 1, lg: 1, xl: 1 }}>
              <MapContainer buildings={buildings} />
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={4} sm={8} md={10} lg={10} xl={10} offset={{ sm: 0, md: 1, lg: 1, xl: 1 }}>
              <h1 className="title-red"> Investigaciones</h1>

              <CarouselComponent slides={slides} />
            </Col>
            <ShopBanner />
          </Row>
        </Container>

      </StyledHomeMain></>
  )
}

MainHome.propTypes = {}

MainHome.defaultProps = {}

export default MainHome