import React from "react"
import { StyledFooter, StyledCenterConteiner, StyledContact, StyledSocialContainer, StyleLowFooter } from "./footer.styles.js"
import { Col, Container, Row } from "react-awesome-styled-grid"
import Image from "../../atoms/media/image/image"
import imgRuedas from "../../../../static/assets/images/common/Logo_Ruedas_Rebeldes2.png"
import imgICFJ from "../../../../static/assets/images/common/Logo_ICFJ.png"
import imgBCJB from "../../../../static/assets/images/common/Logo_Border_Hub_2.png"
import ProjectIcon from "../../atoms/icons/icon/projectIcon/projectIcon"

const componentId = `o-footer`

const Footer = ({ className }) => {
  return (
    <StyledFooter className={`${componentId} ${className}`}>
      <Container className={`${componentId}__container`}>
        <StyledCenterConteiner>
          <Row>
            <Col className={`${componentId}__icon`} xs={5} sm={4} md={5} lg={5} xl={5}>
              <a href="https://www.ruedasrebeldes.com/" target="_blank" rel="norefferer">
                <Image className={`${componentId}__img`} sourceUrl={imgRuedas} />
              </a>
            </Col>
            <Col className={`${componentId}__icon`} xs={5} sm={4} md={5} lg={5} xl={5}>
              <a href="https://www.borderhub.org/" target="_blank" rel="norefferer">
                <Image className={`${componentId}__img`} sourceUrl={imgBCJB} />
              </a>
            </Col>
            <Col className={`${componentId}__icon`} xs={5} sm={4} md={5} lg={5} xl={5}>

            </Col>
            <Col className={`${componentId}__icon`} xs={5} sm={4} md={5} lg={5} xl={5}>
              <a href="https://www.icfj.org/" target="_blank" rel="norefferer">
                <Image className={`${componentId}__img`} sourceUrl={imgICFJ} />
              </a>
            </Col>
          </Row>
        </StyledCenterConteiner>
        <socialBlock >
          <Row className={`${componentId}__socialRow`}>
            <Col xs={2} sm={4} md={5} lg={5} xl={5}>
              <StyledContact >
                <p>contacto@ruedasrebeldes.com Ruedas Rebeldes. Periodismo en bicicleta. Saltillo, Coahuila. MX</p>
              </StyledContact>
            </Col>
            <Col xs={2} sm={4} md={5} lg={5} xl={5}>
              <StyledSocialContainer>
                <a href="https://www.facebook.com/profile.php?id=100083014976811" target="_blank" rel="norefferer">
                  <ProjectIcon id="fb" />
                </a>
                <a href="https://www.tiktok.com/@ruedasrebeldes" target="_blank" rel="norefferer">
                  <ProjectIcon id="tiktok" />
                </a>
                <a href="https://twitter.com/ruedasrebeldes" target="_blank" rel="norefferer">
                  <ProjectIcon id="twitter" />
                </a>
                <a href="https://www.youtube.com/@ruedasrebeldes" target="_blank" rel="norefferer">
                  <ProjectIcon id="youtube" />
                </a>
              </StyledSocialContainer>
            </Col>
          </Row>
        </socialBlock>
      </Container>
      <StyleLowFooter >
        <Col xs={4} sm={6} md={6} lg={6} xl={6} offset={{ sm: 1, md: 3, lg: 3, xl: 3 }}>

          <p>Monitor de movilidad Saltillo es un proyecto desarrollado con el apoyo del Hub de Periodismo de Investigación de la Frontera Norte (Border Hub), el centro internacional para Periodistas (ICFJ) y la Agencia Internacional para el Desarrollo de Estados Unidos(USAID)</p>
        </Col>
      </StyleLowFooter>
    </StyledFooter>
  )
}

// Expected prop values
Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
