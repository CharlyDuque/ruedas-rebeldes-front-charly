import React from "react"
import { StyledFooter, StyledRigthConteiner, StyledLeftConteiner, StyledContact, StyledSocialContainer } from "./footer.styles"
import { Col, Container, Row } from "react-awesome-styled-grid"
import Image from "../../atoms/media/image/image"
import imgRuedas from "../../../../static/assets/images/common/Logo_Ruedas_Rebeldes2.png"
import imgICFJ from "../../../../static/assets/images/common/Logo_ICFJ.png"
import imgUSAID from "../../../../static/assets/images/common/Logo_USAID.png"
import imgBCJB from "../../../../static/assets/images/common/Logo_Border_Hub_2.png"
import ProjectIcon from "../../atoms/icons/icon/projectIcon/projectIcon"

const componentId = `o-footer`

const Footer = ({ className }) => {
  return (
    <StyledFooter className={`${componentId} ${className}`}>
      <Container className={`${componentId}__container`}>
        <Row>
          <Col xs={2} sm={4} md={5} lg={5} xl={5}>
            <Image className={`${componentId}__img`} sourceUrl={imgRuedas} />
          </Col>
          <Col xs={2} sm={4} md={5} lg={5} xl={5}>
            <Image className={`${componentId}__img`} sourceUrl={imgBCJB} />
          </Col>
          <Col xs={2} sm={4} md={5} lg={5} xl={5}>
            <Image className={`${componentId}__img`} sourceUrl={imgUSAID} />
          </Col>
          <Col xs={2} sm={4} md={5} lg={5} xl={5}>
            <Image className={`${componentId}__img`} sourceUrl={imgICFJ} />
          </Col>
        </Row>
        <Row>
          <Col xs={2} sm={4} md={5} lg={5} xl={5}>
            <StyledContact>
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
        <Container>
          <p>Monitor de movilidad Saltillo es un proyecto desarrollado con el apoyo del Hub de Periodismo de Investigación de la Frontera Norte (Border Hub), el centro internacional para Periodistas (ICFJ) y la Agencia Internacional para el Desarrollo de Estados Unidos(USAID)</p>

        </Container>
      </Container>
    </StyledFooter>
  )
}

// Expected prop values
Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
